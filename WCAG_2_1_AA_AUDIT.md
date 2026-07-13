# WCAG 2.1 AA Final-Pass Review

## Corrections included

- Added a keyboard-visible Skip to main content link.
- Added stable heading IDs and labelled page regions/main content.
- Added `inert` to inactive SPA screens so keyboard and assistive technology users cannot enter hidden pages.
- Added semantic progress-list markup and `aria-current="step"`.
- Changed the inactivity warning from 10 to 20 seconds, giving users the minimum WCAG timing-extension window before reset.
- Added focus management and keyboard trapping to the timeout dialog.
- Added a two-layer high-contrast focus indicator that remains visible on light and dark surfaces.
- Added a narrow-screen reflow rule to prevent horizontal page scrolling at approximately 320 CSS pixels.
- Strengthened password field semantics and QR-code alternative text.
- Preserved keyboard-operable flip cards, live page/card announcements, reduced-motion handling, and the accessible Admin dialog.

## Automated/static checks performed

- All HTML documents declare `lang="en"`.
- All images have non-empty alternative text.
- All buttons specify `type="button"`.
- Interactive flip cards expose keyboard focus, button role, expanded state, and keyboard activation.
- Visible palette text colors meet 4.5:1 against white/light backgrounds where used for normal text; large bold button text meets the large-text threshold.
- JavaScript syntax was checked with Node.

## Manual checks still required

No automated pass can certify WCAG conformance. Before publishing a conformance claim, manually test:

1. VoiceOver on the target iPad in portrait and landscape.
2. Keyboard-only navigation, including Full Keyboard Access on iPadOS.
3. 200% text zoom and 400% browser zoom/reflow.
4. Text-spacing overrides under WCAG 1.4.12.
5. Color/contrast using the final deployed build and actual display settings.
6. Timeout extension, Admin modal focus containment, and all card announcements.

This package is designed to move the kiosk materially closer to WCAG 2.1 AA, but it is not a third-party accessibility certification.
