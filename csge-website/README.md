# CSGE website – design handoff

Design reference for the CSGE (Center of Sino-German Education) website. These are static HTML mockups: open the files directly in a browser. They define layout, copy, colours and typography — please rebuild them as production pages in the stack you prefer.

## Files

| File | Purpose |
|---|---|
| `index.html` | **Homepage.** Linked from the German UDS website (Colleges section). Introduces CSGE and its programs and leads to **Apply**. |
| `consultation.html` | **Landing page.** Separate link for ads/WeChat. Collects leads via a consultation form. |
| `images/` | Academic Board portraits (low resolution, cropped from a slide — replace with originals). |

## Design tokens

| Token | Value | Use |
|---|---|---|
| Violet (brand) | `#4E3188` | Primary colour, headings, primary buttons |
| Deep violet | `#2E1D57` | Top bar, contact section |
| Ink | `#1B1530` | Body text, headings |
| Mist | `#F5F2FB` / `#F6F3FB` | Alternating section backgrounds, panels |
| Amber (accent) | `#F4B23E` | Main call to action ("Apply now"), highlights |
| Teal (tech accent) | `#3FC1C9` | Small details only (section marks, route stops) |
| Body grey | `#4A4360` | Paragraph text |

- **Fonts:** Poppins (headings, 600–800) and DM Sans (body, 400–700), from Google Fonts. Chinese fallback: PingFang SC / Noto Sans SC.
- **Radius:** panels 20px · cards 14px · buttons fully rounded (pill).
- **Max content width:** 1200px, 24px side padding.
- **Signature motifs:** the logo's corner brackets (hero card, Meinel portrait, About photo), the small teal corner mark before each lowercase section label, and the dot-grid texture on purple sections.

## Homepage structure (`index.html`)

1. Top bar (EN / 中文, brochure, consultation link) + sticky header with navigation and **Apply** button
2. Hero (purple): headline "Your pass from China to Europe.", China → Europe route graphic
3. Four highlight cards
4. About us
5. Experience Potsdam
6. experience. future. (values + three cards)
7. Programs: Ed4Change (i4study, i4transfer, i4world, i4research – coming soon), Young M.Sc., Builder MBA (coming soon), visa support
8. Academic Board: featured Prof. Meinel + four professors; learning support & advisors
9. Partners
10. Apply (four steps, Flywire payment)
11. FAQs (`<details>` accordion)
12. Contact + footer

## Integrations to build

- **Apply button** (`href="[Apply link]"` and every `#apply` CTA) → application form (e.g. HubSpot) or German UDS application system — **link to be confirmed**.
- **Payment:** Flywire.
- **Consultation form** (`consultation.html`) → CRM (e.g. HubSpot). The form is a mockup with no submit handler yet.
- **Language switch** (EN / 中文): Chinese version still to be produced.
- **Legal pages:** Imprint (Impressum), Privacy (Datenschutzerklärung), cookie consent — required for a German website.
- All `href="#"` links (brochure, imprint, privacy, 中文) are placeholders.

## Content still missing (shown as [brackets] in the pages)

- Photos: online class, workshops, campus, career week, culture, CSGE team, landing-page images
- Logos: UDS, CSGE, partner universities (Guangdong partner, SISU), employer partners, WeChat QR code
- Learning advisors: names, photos, focus areas
- Contact: street address, postcode, email, phone, map
- Next onsite event: name and date
- FAQ: confirm teaching language
- High-resolution Academic Board portraits

## Notes for implementation

- Pages are responsive (flex-wrap / auto-fit grids) and should stay usable at 375px width.
- Keep the heading hierarchy (one `h1`, section `h2`s) and visible keyboard focus (amber outline).
- Inline styles in the mockup are for design only — please move them into your CSS / component system.
