# Ahmed Atya — Portfolio

A responsive personal portfolio starter built with React and Vite.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the local development server:
   ```bash
   npm run dev
   ```
5. Open the local URL printed by Vite.

## Before publishing

- Update `profile.github` and `profile.linkedin` in `src/main.jsx`.
- Replace project names, descriptions, technologies, repository links, and demo links in the `projects` array.
- Verify every skill listed reflects your real experience.
- Put your final CV PDF in the `public/` folder and name it `Ahmed-Atya-CV.pdf`, or change `profile.cv`.
- Remove projects you do not want to feature.
- Never commit `.env` files, API secrets, passwords, or database credentials.

## Build

```bash
npm run build
npm run preview
```

## Deploy

Push this folder to GitHub, then import the repository into Vercel. Use `npm run build` as the build command and `dist` as the output directory.
