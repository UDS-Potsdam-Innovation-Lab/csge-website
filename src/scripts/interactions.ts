const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;
const root = document.documentElement;

function splitHeading(heading: HTMLElement) {
  if (heading.dataset.split === 'done') return;
  const zh = root.lang.startsWith('zh');
  const wrap = (text: string) => {
    const frag = document.createDocumentFragment();
    const parts = zh
      ? text.match(/[\s]+|[\s\S]/g) || []
      : text.split(/(\s+)/);
    let i = 0;
    const take: string[] = [];
    const flush = () => {
      if (!take.length) return;
      const span = document.createElement('span');
      span.className = 'word';
      span.style.setProperty('--wi', String(i++));
      span.textContent = take.join('');
      frag.append(span);
      take.length = 0;
    };
    for (const part of parts) {
      if (/^\s+$/.test(part)) {
        flush();
        frag.append(part);
        continue;
      }
      take.push(part);
      if (!zh || take.length >= 2) flush();
    }
    flush();
    return frag;
  };
  const walk = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent ?? '';
      if (!text.trim()) return;
      node.parentNode?.replaceChild(wrap(text), node);
    } else if (node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).tagName !== 'BR') {
      Array.from(node.childNodes).forEach(walk);
    }
  };
  Array.from(heading.childNodes).forEach(walk);
  heading.dataset.split = 'done';
}

function initSplitHeadings() {
  if (reduceMotion) return;
  document.querySelectorAll<HTMLElement>('.hero .h1').forEach(splitHeading);
}

function initReveal() {
  document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      const el = child as HTMLElement;
      el.setAttribute('data-reveal', '');
      el.style.setProperty('--reveal-delay', `${i * 55}ms`);
    });
  });

  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (reduceMotion) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.08, rootMargin: '0px 0px -48px 0px' },
  );
  items.forEach((el) => {
    el.addEventListener('animationend', (event) => {
      if (event.target !== el) return;
      if (event.animationName !== 'rise-in' && event.animationName !== 'fade-in') return;
      el.classList.add('is-settled');
    });
    io.observe(el);
  });
}

function initCounters() {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  if (reduceMotion || !els.length) return;
  const locale = root.lang.startsWith('zh') ? 'zh-CN' : 'en';
  const animate = (el: HTMLElement) => {
    const target = Number(el.dataset.count);
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString(locale);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        animate(entry.target as HTMLElement);
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.6 },
  );
  els.forEach((el) => {
    el.textContent = '0';
    io.observe(el);
  });
}

function initScrollScene() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  const toTop = document.querySelector<HTMLButtonElement>('.to-top');
  const parallaxEls = reduceMotion
    ? []
    : Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  const useParallax = !reduceMotion && finePointer && window.matchMedia('(min-width: 800px)').matches;

  toTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  if (reduceMotion) {
    const updateLite = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const max = Math.max(document.documentElement.scrollHeight - vh, 1);
      root.style.setProperty('--page-p', (y / max).toFixed(4));
      header?.classList.toggle('is-scrolled', y > 8);
      toTop?.classList.toggle('is-visible', y > 800);
    };
    window.addEventListener('scroll', updateLite, { passive: true });
    updateLite();
    return;
  }

  let ticking = false;
  const update = () => {
    ticking = false;
    const y = window.scrollY;
    const vh = window.innerHeight;
    const max = Math.max(document.documentElement.scrollHeight - vh, 1);
    root.style.setProperty('--page-p', (y / max).toFixed(4));
    header?.classList.toggle('is-scrolled', y > 8);
    toTop?.classList.toggle('is-visible', y > 800);

    if (useParallax) {
      for (const el of parallaxEls) {
        const speed = Number(el.dataset.parallax) || 0.12;
        const r = el.getBoundingClientRect();
        const offset = (r.top + r.height / 2 - vh * 0.45) * speed;
        el.style.setProperty('--py', `${offset.toFixed(1)}px`);
      }
    }
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  window.addEventListener('resize', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
}

function initMenu() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  if (!toggle || !menu) return;

  const openLabel = toggle.dataset.openLabel || 'Open menu';
  const closeLabel = toggle.dataset.closeLabel || 'Close menu';

  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? closeLabel : openLabel);
    menu.hidden = !open;
    document.documentElement.classList.toggle('menu-open', open);
  };

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 1121px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
}

function initScrollSpy() {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-spy] a[href^="#"]'));
  if (!links.length) return;
  const ids = Array.from(new Set(links.map((a) => a.hash.slice(1))));
  const targets = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);

  const setActive = (id: string) => {
    links.forEach((a) => {
      const active = a.hash === `#${id}`;
      a.classList.toggle('is-active', active);
      if (active) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  };
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );
  targets.forEach((t) => io.observe(t));
}

function initAccordions() {
  if (reduceMotion) return;
  document.querySelectorAll<HTMLDetailsElement>('details[data-accordion]').forEach((details) => {
    const summary = details.querySelector('summary');
    const body = details.querySelector<HTMLElement>('[data-accordion-body]');
    if (!summary || !body) return;
    const options: KeyframeAnimationOptions = { duration: 300, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' };
    let animation: Animation | null = null;

    summary.addEventListener('click', (e) => {
      e.preventDefault();
      animation?.cancel();
      if (!details.open || details.classList.contains('is-closing')) {
        details.classList.remove('is-closing');
        details.open = true;
        animation = body.animate({ height: ['0px', `${body.scrollHeight}px`], opacity: [0, 1] }, options);
        animation.onfinish = () => (animation = null);
      } else {
        details.classList.add('is-closing');
        animation = body.animate({ height: [`${body.offsetHeight}px`, '0px'], opacity: [1, 0] }, options);
        animation.onfinish = () => {
          details.open = false;
          details.classList.remove('is-closing');
          animation = null;
        };
      }
    });
  });
}

function initTrackFinder() {
  document.querySelectorAll<HTMLElement>('[data-track-finder]').forEach((finder) => {
    const buttons = Array.from(finder.querySelectorAll<HTMLButtonElement>('[data-track]'));
    const scope = finder.closest('[data-track-scope]') ?? document;
    const cards = Array.from(scope.querySelectorAll<HTMLElement>('[data-track-card]'));
    const grid = cards[0]?.parentElement;

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const selected = button.getAttribute('aria-pressed') === 'true' ? null : button.dataset.track;
        buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.track === selected)));
        cards.forEach((c) => c.classList.toggle('is-selected', c.dataset.trackCard === selected));
        grid?.classList.toggle('has-selection', selected !== null);
      });
    });
  });
}

function initLeadForm() {
  document.querySelectorAll<HTMLFormElement>('form[data-lead-form]').forEach((form) => {
    if (form.dataset.connected === 'true') return;
    const status = form.querySelector<HTMLElement>('[role="status"]');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!status) return;
      status.textContent =
        form.dataset.offlineMessage || 'This form is not connected yet. Please contact us via WeChat for now.';
      status.classList.remove('is-shaking');
      void status.offsetWidth;
      status.classList.add('is-shaking');
    });
  });
}

function initMagnetic() {
  if (reduceMotion || !finePointer) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 8;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 5;
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
    });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--mx', '0px');
      el.style.setProperty('--my', '0px');
    });
  });
}

function initTilt() {
  if (reduceMotion || !finePointer) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    el.addEventListener('pointerenter', () => {
      el.classList.add('is-tilting');
      el.style.setProperty('--ty', '-4px');
    });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--rx', `${(-y * 4).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${(x * 5).toFixed(2)}deg`);
    });
    el.addEventListener('pointerleave', () => {
      el.classList.remove('is-tilting');
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
      el.style.setProperty('--ty', '0px');
    });
  });
}

initSplitHeadings();
initReveal();
initCounters();
initScrollScene();
initMenu();
initScrollSpy();
initAccordions();
initTrackFinder();
initLeadForm();
initMagnetic();
initTilt();
