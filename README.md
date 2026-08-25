# CRC Community Education Kiosk v1.0.40

This package contains the iPad-focused PWA kiosk and supporting documentation for pilot testing.

Key deployment files
- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- `testimonial.mp4`
- `testimonial_poster.jpg`
- `icons/`

Build 1.0.40 fixes inactivity behavior on the Welcome screen: after 60 seconds without interaction, the kiosk returns to the opening testimonial video. No incomplete session is recorded unless a visitor had actually started a kiosk session.

Target device
- iPad kiosk in landscape or portrait
