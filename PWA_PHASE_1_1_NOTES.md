# CRC Kiosk PWA – Phase 1.1

This package keeps the existing kiosk UI and application logic unchanged while adding production PWA infrastructure.

## Added / updated

- `manifest.json` with GitHub Pages-compatible relative paths
- `service-worker.js` with offline-first caching and cache cleanup
- `pwa-register.js` for service worker registration and update prompts
- `offline.html` fallback page
- App icon files in `/icons/`
- Apple Home Screen meta tags added to HTML pages

## Cache version

`crc-kiosk-c3a18f92ce6c`

## Deployment

Upload the contents of this ZIP to the root of the GitHub repository used by GitHub Pages.

After deployment, visit the app once while online, then test offline by disabling Wi-Fi and reopening or refreshing the installed app.
