# D2C Ecommerce — Website Redesign

Full multi-page React site for D2C Ecommerce, rebuilt on:

- **React 18** + **Vite** — app shell & dev server
- **TailwindCSS** — utility styling (Superhumon-inspired indigo/violet/teal theme)
- **React Router** — client-side routing across all pages
- **React Three Fiber** + **Drei** — 3D floating shapes in the hero
- **Framer Motion** — scroll reveals, counters, page transitions
- **EmailJS** — working contact form (no backend needed)
- Custom Aceternity-UI-style `Spotlight` and Magic-UI-style `Meteors` effects
  (hand-built equivalents, not the paid/copy-paste library source)

## Pages included

Home, About Us, Brands (full portfolio), Our Team, Media / Press, Franchise,
FAQ, Careers, Contact Us, and Policy pages (Terms, Privacy, Shipping, Refund).

## Getting started

```bash
npm install
cp .env.example .env   # then fill in your EmailJS keys
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Wiring up the contact form (EmailJS) — required, does NOT work out of the box

The form is fully coded but it needs your own free EmailJS account before it
can actually send mail — there is no backend/server here, EmailJS is what
delivers the email. Do this once:

1. Create a free account at https://www.emailjs.com
2. **Email Services** → Add Service (e.g. Gmail) → copy the **Service ID**
3. **Email Templates** → create a template with a body that uses
   `{{user_name}}`, `{{user_email}}`, `{{user_phone}}`, `{{message}}`
   → copy the **Template ID**
4. On that same template, set the **"To Email"** field to `{{to_email}}`
   (not a hard-coded address) — the form already sends
   `to_email = shivamhirwani069@gmail.com` on every submission, so once
   this field uses the variable, every message lands in that inbox.
5. **Account → General** → copy your **Public Key**
6. Put all three into `.env` (copy `.env.example` → `.env` first):
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```
7. Restart `npm run dev` (Vite only reads `.env` on start).

Until steps 1–7 are done, submitting the form will show a red
"couldn't send — check your EmailJS keys" message — that's expected, it's
just waiting on your keys. The same `<ContactForm />` component is reused on
the Contact, Franchise and Careers pages, so wiring it once fixes it
everywhere.

## Build for production

```bash
npm run build
npm run preview
```

Outputs a static `dist/` folder you can deploy anywhere (Vercel, Netlify,
your own server).

## Notes

- Brand & company logos live in `src/assets/logos/` (pulled from the
  original site) and are imported directly in components.
- Site copy (brands, team, FAQ, press) lives in `src/data/siteData.js` —
  edit that one file to update content across the whole site.
- The 3D hero (`src/components/Scene3D.jsx`) is intentionally lightweight
  (3 floating shapes) to keep first paint fast — feel free to swap in a
  GLTF model via `useGLTF` from Drei if you want a branded 3D object.
