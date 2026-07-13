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


Update: Added manifest screenshots for richer PWA install UI on desktop and mobile.


## Admin tracking update
- Engagement sessions now use IndexedDB with migration/fallback from localStorage.
- Admin panel displays started, completed, incomplete, and most recent session statistics.
- CSV export uses the iOS/iPadOS Share Sheet when supported.

## Inactivity reset update
- 60 seconds of inactivity triggers a 10-second warning.
- Continue Session resumes the active session.
- Return Now or countdown expiration saves the incomplete session and returns to the welcome screen.
- Completed engagement records remain intact.
- The timer is paused while the Admin panel is open.

## Timeout reset fix
- Explicitly activates the welcome screen after inactivity.
- Closes the Admin panel and returns the viewport to the top.
- Bumps the service-worker cache version so installed devices receive the corrected code.


## Screen Wake Lock update
- Added `wake-lock.js` using the Screen Wake Lock API.
- Reacquires the wake lock when the PWA becomes visible again.
- Includes user-interaction fallbacks for Safari/iPadOS compatibility.
- Updated the service-worker cache version and precache list.


## iPad layout rollback
- Reverted the tablet-specific portrait and landscape responsive layout changes.
- Preserved offline caching, Admin tracking, IndexedDB support, inactivity timeout, reset fix, and Screen Wake Lock.
- Updated the service-worker cache version so installed devices receive the rollback.


## Admin password correction
- Corrected the password handler to target `#adminBtn`.
- Uses the panel's existing `show` class rather than the nonexistent `open` class.
- Integrated password validation into the original Admin handler.
- Preserves statistics refresh and inactivity-timer behavior.
- Updated the service-worker cache version.
