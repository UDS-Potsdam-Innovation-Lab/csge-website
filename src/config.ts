export const site = {
  name: 'CSGE | Center of Sino-German Education',
  shortName: 'CSGE',
  description:
    'Study 100% online from China with German UDS. Earn European ECTS credits, get visa support and open a path to study and work in Europe.',
  company: 'Center of Sino-German Education and Talent Mobility GmbH',
  locale: 'en',
  // Set this to the public origin before launch, e.g. 'https://www.csge.de'
  url: '',
  // Keep search engines out until legal pages and remaining placeholders are final.
  noindex: true,
};

export const pages = {
  home: {
    title: 'Study online from China to Europe | CSGE',
    description:
      'CSGE in Potsdam offers state-accredited German programs to students in China. Learn online, earn ECTS credits from German UDS and build your pathway to Europe.',
  },
  consultation: {
    title: 'Book a free consultation | CSGE',
    description:
      'Talk to CSGE advisors in Potsdam, in Chinese or English. Find your Ed4Change, Young M.Sc. or MBA pathway from China to Europe.',
  },
  imprint: {
    title: 'Imprint | CSGE',
    description: 'Legal imprint for the Center of Sino-German Education and Talent Mobility GmbH, Potsdam.',
  },
  privacy: {
    title: 'Privacy | CSGE',
    description: 'Privacy policy for the CSGE website, consultation form, payments and related processing.',
  },
};

// Empty strings render as "#" until the real URLs are confirmed.
export const links = {
  apply: '',
  brochure: '',
  // POST endpoint for the consultation form (e.g. HubSpot form submission URL).
  consultationFormAction: '',
};

export const href = (url: string) => url || '#';

export const absoluteUrl = (path = '/') => {
  if (!site.url) return path;
  const origin = site.url.replace(/\/$/, '');
  const normalised = path.startsWith('/') ? path : `/${path}`;
  return `${origin}${normalised}`;
};
