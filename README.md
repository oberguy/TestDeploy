# CRC Community Education Kiosk v1.0.43

This package contains the iPad-focused PWA kiosk and supporting documentation for pilot testing.

Key deployment files
- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- `testimonial_playlist.mp4` — combined Juanita Thomas then Quintin Griffin testimonials
- `testimonial_poster.jpg`
- `icons/`

Build 1.0.43 changes iPad video loading so the complete combined testimonial MP4 is prepared as a local Blob URL before **Play Testimonials** becomes active. The poster and play overlay stay visible until the video clock actually advances, preventing the black-screen/stalled-play behavior seen on older iPads. Juanita plays first, followed by Quintin, and the combined video repeats. **Touch to Begin** remains available throughout.

After 60 seconds without interaction on the Welcome screen or during an active kiosk session, the kiosk returns to the beginning of the combined testimonial video. No incomplete session is recorded unless a visitor had actually started a kiosk session.

Target device
- iPad kiosk in landscape or portrait
