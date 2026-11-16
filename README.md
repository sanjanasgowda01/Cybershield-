# CyberShield

CyberShield is an educational Next.js app that helps people review everyday account-security habits and find practical account-recovery and privacy guidance.

## Run locally

1. Install Node.js (version 20.9 or newer is recommended for the Next.js version in this project).
2. Open a terminal in this project folder.
3. Install the project packages:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000` in your browser.

## Available pages

- `/` — Home
- `/assessment` — Four-question security assessment
- `/dashboard` — Assessment answers and recommendations
- `/incidents` — Common security risks
- `/privacy` — Privacy recommendations
- `/privacy-notice` — Information and privacy notice
- `/recovery` — Account recovery guidance
- `/checklist` — Seven-step recovery checklist

## Project structure

- `app/` contains the Next.js App Router pages and global stylesheet.
- `src/components/` contains reusable interface components.
- `src/context/` contains shared assessment and checklist state.
- `src/data/` contains the assessment questions and educational content.

## Important safety note

CyberShield is an educational project. It does not scan accounts, detect hacking, run antivirus scans, or change account settings. Never enter passwords, one-time passcodes, or recovery codes into the app. Assessment answers and checklist progress are saved in browser storage on the current device; browser storage must not be used for secrets.

See `FUTURE-THREAT-DETECTION.md` for research ideas only. No automatic threat-detection feature is implemented.
