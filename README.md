# Agency Client Onboarding — GitHub Pages

A clean, mobile-friendly, five-step Bangla client onboarding form for WordPress / e-commerce website projects. Built with **HTML, CSS and vanilla JavaScript**. No agency website or WordPress required.

## What is included

- Five-step onboarding form: business details, social links, delivery rates, payments/policies, assets + review
- Mobile responsive, logo / agency name configuration
- Browser-local draft autosave
- Form validation and loading/success/error states
- Form submissions via **Formspree**, appearing in your Formspree dashboard and configured notifications

> GitHub Pages does not process or save form submissions. Submissions go to your connected Formspree account, **not into the public GitHub repository**.

## Setup (about 5 steps)

1. Sign up at [Formspree](https://formspree.io/), create a **New Form**, and copy the endpoint, for example `https://formspree.io/f/abcd1234`.
2. Open `app.js` and edit the `SETTINGS` values near the top:

   ```js
   const SETTINGS = {
     agencyName: 'YOUR AGENCY',
     logoUrl: '', // e.g. 'assets/logo.png' or a complete https:// URL
     formspreeEndpoint: 'https://formspree.io/f/YOUR_REAL_FORM_ID',
     projectLabel: 'Website Project'
   };
   ```

3. To add a local logo, create an `assets` folder, upload `logo.png`, and set `logoUrl: 'assets/logo.png'`. The placeholder `A.` mark appears until you add it.
4. In GitHub, create a **public** repository called `client-onboarding`. Upload `index.html`, `style.css`, `app.js` (and the optional `assets` folder) to its root. Do not upload client data or credentials.
5. Open your GitHub repository → **Settings → Pages → Build and deployment** → **Deploy from a branch**, select `main` and `/ (root)`, click Save. The form will be available at:

   `https://YOUR_GITHUB_USERNAME.github.io/client-onboarding/`

6. Open the live form and do one **test submission**, then check your Formspree dashboard/email before sending to clients. Configure Formspree notifications if needed.

## Changing colors

Edit the CSS variables at the top of `style.css`, especially `--primary` and `--primary-dark`.

## Important notes

- The default Formspree endpoint is a placeholder and cannot collect submissions until you replace it.
- Formspree plan features vary. According to Formspree's documentation, CSV/JSON exports require a **paid Personal, Professional or Business plan** (as of the cited 2025 documentation). Submissions are viewable in its dashboard.
- Never collect WordPress admin passwords, payment PINs, OTPs, or other secret credentials in this form.
- Draft autosave uses the client's browser localStorage, so clients should use their own device if the form includes personal contact details.
- The form uses Google Fonts; it will fall back to device fonts if fonts do not load.
- To collect image files, request a shareable Google Drive / Dropbox link in the final step; uploading files directly is not supported in this starter.

## Files

- `index.html`: form markup
- `style.css`: responsive UI
- `app.js`: branding, validation, draft autosave, submission logic
- `README.md`: deployment guide
