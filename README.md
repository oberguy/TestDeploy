# CRC Community Education Kiosk v1.0.41

This package contains the iPad-focused PWA kiosk and supporting documentation for pilot testing.

Key deployment files
- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- `testimonial.mp4` — Juanita Thomas testimonial
- `testimonial_poster.jpg`
- `testimonial_quintin.mp4` — Quintin Griffin testimonial
- `testimonial_quintin_poster.jpg`
- `icons/`

Build 1.0.41 adds a two-video opening playlist: Juanita Thomas followed by Quintin Griffin, then the playlist repeats. After 60 seconds without interaction on the Welcome screen or during an active kiosk session, the kiosk returns to the beginning of Juanita’s testimonial. No incomplete session is recorded unless a visitor had actually started a kiosk session.

Target device
- iPad kiosk in landscape or portrait
