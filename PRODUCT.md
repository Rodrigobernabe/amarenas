# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS (vanilla) + GSAP via CDN, chosen by the user. No build step; deployable to Netlify / GitHub Pages / any static host. Spanish (Argentina) content; prices in Argentine pesos (ARS) with dot thousand separators exactly as provided by the client.

## Users

Primary: a person on a mobile phone deciding what to eat or drink at Amarenas — browsing the carta to pick dishes, compare prices, and build an order mentally before visiting, ordering, or calling. The confirmed primary action of this landing: **see the menu and decide what to order**. Contact/reservation details are not yet available and ship as clearly marked placeholders.

## Product Purpose

A VIP-styled landing page for the restaurant **AMARENAS · CASONA DE SABORES** presenting its full carta (brunch, cafetería, almuerzo & cena) in an elegant, browseable, mobile-first experience with premium motion (GSAP or equivalent). Success: a first-time visitor immediately feels the upscale identity of the house and can find any dish and price in seconds.

## Positioning

An all-day "casona" (grand-house) dining experience — Argentine café culture, brunch-to-dinner in one elegant place — presented with VIP polish rather than a flat price list. The menu is the star; the presentation must feel like the house itself: warm, refined, generous.

## Operating Context

- User request defines the aesthetic contract: **"estética vip"**, **integrated GSAP animations**, **mobile-first**. Binding.
- The menu was provided by the client as raw text (two sections: DESAYUNO & MERIENDA, ALMUERZO & CENA) with prices in ARS; several drinks are "S/P (Sin precio)" and must render as such, not invented prices.
- 12 screenshots of the real menu live in `fotosmenu/` (source of truth for the text and potential imagery). This model cannot read images, so text content is transcribed from the client's message, which they confirmed matches the screenshots.
- No real photos of the restaurant/dishes, logo, colors, address, hours, phone/WhatsApp, or Instagram were provided. Visual identity is to be invented (VIP direction); contact data ships as clearly marked placeholders.

## Capabilities and Constraints

- Full two-part menu:
  - **Desayuno & Merienda**: Brunch para compartir ($50.000); Cafetería (espresso–submarino); Fríos & Frapés; Tentaciones (tortas, croissants, waffles, cookies, omelettes, medialunas, tostadas…); Sándwiches (Mediterráneo, Tostón de campo, Pebete, Focaccia); Combos especiales (CAMPO, AMARENAS, NUTRITIVO); Combos para 2 personas.
  - **Almuerzo & Cena**: Entradas; Ensaladas; Guarniciones; Principales (milanesas, pollo, vacío, bife de chorizo, entraña, costeletas); Menú Kids; Pizzas; Pastas; Salsas; Hamburguesas (Clásica, Americana, Yankee — incluyen papas); Sándwiches (incluyen papas); Bebidas; Postres.
- Dishes with descriptions (e.g., hamburguesas, sándwiches) must carry their description text.
- Prices must be exact; "S/P" stays "S/P". No invented commercial claims, phone numbers, addresses, hours, or social handles.
- Styling claims: do not fabricate allergen or calorie data.

## Brand Commitments

- Name: **AMARENAS**; tagline: **CASONA DE SABORES** (use verbatim, in caps as given).
- Client-described cuisine: "Cocina de autor / fusión" (their label); menu evidence shows upscale Argentine café-restaurant fare. Brand language in the UI should honor the "casona" hospitality voice.
- Binding visual contract from the client: **VIP aesthetic**, **premium animations (GSAP)**, **mobile-first**. Everything else about the visual world is open for a direction proposal.
- A newer Impeccable (v4.1.3) is available; update was mentioned to the user, not run.

## Evidence on Hand

- Full real menu text (client message, transcribed above in Capabilities): the authoritative dish/price list for this build.
- `fotosmenu/Screenshot_*.png` (12 files): the client's own menu screenshots; usable as page imagery, though their exact content (text) is not legible to this model.

## Product Principles

1. The menu is the product: every dish and price true to the client's text, nothing invented.
2. VIP feel without heaviness: elegance must survive a 375 px phone screen and a slow connection.
3. Motion earns its place: GSAP used to guide, reveal, and delight — never to delay content.
4. Honesty in gaps: no address, hours, phone, or socials fabricated — clear placeholders instead.
5. The house voice: warm, refined, Argentine — "casona de sabores", never a generic price list.

## Accessibility & Inclusion

No product-specific requirement was established beyond: readable menu typography, adequate contrast, operable animations with `prefers-reduced-motion` respected, and touch targets sized for thumbs on mobile.
