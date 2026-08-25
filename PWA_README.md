# CRC Community Education Kiosk PWA

## Publish
Upload the contents of this folder to the root of a secure HTTPS website, such as GitHub Pages. Keep `index.html`, `manifest.webmanifest`, `service-worker.js`, and the `icons` folder together.

## Install
- iPad/iPhone: Open the site in Safari, tap Share, then **Add to Home Screen**.
- Microsoft Edge/Chrome: Open the site and use the install icon in the address bar or the browser's **Install app** option.
- Firefox desktop does not currently provide the same full PWA installation experience as Edge/Chrome.

## Offline test
1. Open the published site once while online.
2. Navigate through the kiosk so the service worker finishes installing.
3. Close and reopen the installed app with Wi-Fi disabled.

The kiosk content and engagement data remain local to the device. The Screen Wake Lock API is requested while the kiosk is visible; iOS may still apply operating-system power-management rules.

## Opening testimonial video
The bundled `testimonial_playlist.mp4` contains the full Juanita Thomas testimonial followed by the full Quintin Griffin testimonial. Using one continuous media file avoids iPadOS issues caused by changing video sources between testimonials. Build 1.0.43 also loads the complete MP4 into a local Blob URL before enabling **Play Testimonials**, so playback no longer depends on repeated service-worker byte-range reads while the video is running. The poster/play overlay remains visible until playback is confirmed by actual time progression. On iPadOS, the first audible playback may require the visitor to tap **Play Testimonials**. After that successful play action, the combined video loops continuously.

The 60-second inactivity timeout also runs on the Welcome screen. If Welcome is left untouched, the kiosk returns to the beginning of the combined testimonial video without creating a session record. During an active session, a timeout is recorded as incomplete. In both cases, the app attempts to restart playback with audio without reloading.
