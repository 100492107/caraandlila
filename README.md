# Cara + Lila

A consumer-facing creator storefront for **caraandlila.com**.

The public site is designed around two jobs:

1. Make Cara + Lila recognisable.
2. Give real product recommendations a clean, conversion-focused home.

## Pages

- `index.html` — creator homepage
- `shop.html` — storefront with creator/category filters
- `products.js` — editable product catalogue
- `styles.css` — shared visual system
- `assets/cara-portrait.jpg`
- `assets/lila-portrait.jpg`
- `assets/cara-lifestyle.jpg`
- `assets/lila-lifestyle.jpg`
- `vercel.json` — static deployment config

## Product catalogue

The storefront deliberately does **not** invent products.

Add a real product to `products.js` with:

- `name`
- `creator`
- `category`
- `description`
- `image`
- `price`
- `platform`
- `merchant`
- `destinationUrl`
- `disclosure`
- `featured`
- `active`

Set `active: true` only when the destination is live and the product is genuinely being featured.

The same catalogue powers the homepage featured strip and the shop page, so one product entry is enough to surface it in both places.

## Social

Current public links:

- TikTok: https://www.tiktok.com/@caraandlila
- Instagram: https://www.instagram.com/caraandlila/
- YouTube: https://www.youtube.com/@caraandlila

## Public voice

Cara and Lila speak in first person:

- Cara: I / me / my
- Lila: I / me / my
- Together: we / us / our

Keep internal business/AI strategy language out of the public-facing copy.

## Commercial disclosure

Affiliate/shop relationships should be clearly labelled where they apply. Destination pricing, availability and eligibility can change, so the site should not imply guaranteed pricing, stock or commission.
