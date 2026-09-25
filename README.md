# Cara & Lila — Public storefront

Public website for **caraandlila.com**: who Cara and Lila are, what they’re recommending/selling, and links to their socials.

Not the Cornerstone OS app (`app.cornerstoneaigroup.com`). This is the audience-facing shop/profile surface.

## Stack

- Static HTML/CSS (no build step)
- Deployed on **Vercel** from this repo
- Domain: `caraandlila.com`

## Deploy (Vercel)

1. [vercel.com](https://vercel.com) → **Add New Project** → Import `100492107/caraandlila`
2. Framework preset: **Other** (static)
3. Root directory: `.` · Build command: leave empty · Output: `.`
4. Deploy → you get `*.vercel.app`
5. **Settings → Domains** → add `caraandlila.com` and `www.caraandlila.com`
6. In your DNS provider, set the records Vercel shows (typical):

   | Type  | Name | Value |
   |-------|------|--------|
   | A     | `@`  | `76.76.21.21` |
   | CNAME | `www`| `cname.vercel-dns.com` |

7. Remove old **Netlify** A/CNAME records for this domain so they don’t conflict.

## Edit content

- Product cards, social URLs, and copy live in `index.html`
- Styles in `styles.css`
- Placeholder product links: replace `#` with real affiliate / TikTok Shop / Instagram URLs when ready

## Creators

| | Cara | Lila |
|--|------|------|
| Lens | **BUILD** — agency, earned progress, useful finds | **NOTICE** — presence, taste, considered lifestyle |
| Disclosure | AI-native creators; content is labelled; commercial links disclosed | Same |

## Related

- Operating system / production: [caig-app](https://github.com/100492107/caig-app) → `app.cornerstoneaigroup.com`
