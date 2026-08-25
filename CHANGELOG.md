# v1.0.39 – Opening Testimonial Video

- Added the full Juanita Thomas BEAT Cancer testimonial as the opening kiosk screen.
- Uses a compressed 720p H.264/AAC MP4 for iPad-friendly playback and offline caching.
- Added a large **Play Video** action so the first visitor interaction can enable audio on iPadOS.
- Added an always-available **Touch to Begin** button that pauses the video and opens the existing Welcome screen.
- The testimonial loops after it reaches the end when playback was started successfully.
- The 60-second kiosk timeout now records the active session as incomplete and returns to the opening video without reloading the PWA.
- On timeout, the app resets the testimonial to 0:00 and attempts to restart it with audio; if iPadOS blocks playback, the Play Video prompt is shown immediately.
- Orientation refresh now remembers whether the opening video was active and its playback position.
- Added service-worker byte-range support so the cached MP4 can play while offline.
- Preserved the existing Welcome screen, Admin panel, engagement tracking, accessibility work, no-zoom behavior, and iPad layout fixes.

# v1.0.38 – iPad Pro 10.5 Subtitle Wrap Fix

- Fixed the Why Screening Matters subtitle wrapping on the iPad Pro 10.5-inch in landscape.
- Allows the subtitle to wrap naturally within a controlled width.
- Preserves the shared header typography and all other page layouts.
- No changes to portrait layouts or other devices.

# v1.0.37 — iPad Pro 10.5 Compatibility

- Added a targeted landscape breakpoint for the iPad Pro 10.5-inch viewport.
- Reduced the Why Screening Matters infographic width by approximately 7% on that device class.
- Keeps the Rectum label inside the viewport.
- Leaves all other pages, portrait layouts, and other devices unchanged.

# v1.0.36 - Timeout Engagement Tracking Fix

- Timed-out sessions are now finalized and saved as incomplete sessions instead of being deleted.
- Timeout records now include end time and calculated duration.
- Sessions started, incomplete sessions, and last-session reporting now update after an inactivity timeout.
- Completed session totals remain unchanged when a session times out.
- Existing return-to-Welcome behavior is preserved.

# Orientation Refresh - v1.0.35

- Added automatic refresh after switching between portrait and landscape.
- Restores the visitor to the same kiosk page after rotation.
- Preserves the active session and completed engagement statistics.
- Resets any open flip cards to their front side after rotation.
- Debounces iPad orientation and resize events to prevent repeated reload loops.
- Scrolls the restored page to the top after rotation.

# v1.0.34 — Kiosk Zoom Controls

- Disabled pinch-to-zoom with a locked viewport scale.
- Prevented Safari gesture zoom events on iPad and iPhone.
- Prevented double-tap zoom while preserving single taps.
- Disabled text selection, touch callouts, and tap highlights for kiosk content.
- Preserved text selection inside form fields and preserved normal page/content scrolling.
- Updated the visible version and service-worker cache.

# v1.0.33 — Portrait Resources Container Growth

- Removed the fixed-height portrait Resources tile region.
- Made the middle Resources container grow naturally with all three tiles.
- Moved portrait scrolling to the page instead of an inner tile box.
- Kept the 2 + 1 portrait card arrangement.
- Positioned navigation after the complete tile grid so it no longer floats below an undersized container.
- Left landscape layouts unchanged.

# v1.0.32 — Portrait Resources Content-Driven Cards

- Replaced fixed portrait Resources card heights with content-driven sizing.
- Kept the two-plus-one portrait card grid.
- Ensured the second row begins after the tallest first-row card.
- Added an internal scroll area above the locked navigation when portrait content exceeds the available height.
- Prevented card overlap and clipping while preserving landscape layouts.

# v1.0.31 — Portrait Resources Card Grid

- Matched the Resources portrait card layout to the Screening Tests 2 + 1 pattern.
- Uses two equal-width cards on the first row and one same-width centered card on the second row.
- Removed the full-width third resource card in portrait.
- Preserved separate bottom navigation and locked landscape layouts.
- Updated visible build and service-worker cache versions.

# v1.0.30 — iPad Portrait Resources Fix

- Rebuilt the Resources / Thank You page for iPad portrait using a stable 2 + 1 full-width card layout.
- Made the third About This Kiosk card span the full portrait width.
- Prevented card text and QR codes from spilling outside their tiles.
- Kept the navigation in a dedicated bottom row so it no longer covers the third card.
- Reduced portrait-only hero and card heights to better fill the iPad viewport.
- Left landscape, desktop, and phone layouts unchanged.

# v1.0.29 — iPad Portrait Comparison Table Fix

- Removed the fixed 980px portrait table width that clipped the FIT-DNA column.
- Made the comparison table fit the available iPad portrait content width.
- Assigned portrait-specific column proportions for the row labels and three screening options.
- Slightly compacted portrait-only table text and cell padding to preserve readability.
- Landscape layouts remain unchanged.

# v1.0.28 — Dedicated iPad Portrait Support

- Added a separate iPad portrait breakpoint for widths from 700px through 1100px.
- Preserved all locked landscape layouts.
- Prevented iPad portrait from falling into the single-column phone layout.
- Kept Average Risk and Increased Risk cards side by side.
- Added a two-plus-one layout for Screening Tests and Resources.
- Added a two-column Common Questions grid.
- Limited horizontal scrolling to the comparison table rather than the whole page.
- Added scrollable content regions with navigation kept clear and consistently positioned.
- Updated the visible version and service-worker cache to v1.0.28.

# v1.0.27 — Welcome-Only Admin Access

- Moved the Admin button and Admin panel into the Welcome screen.
- Removed Admin controls from all educational and resource pages.
- Preserved password protection (1026), engagement summary, CSV export, and local-data clearing.
- Automatically closes the Admin panel when leaving the Welcome screen.
- Updated the visible version and service-worker cache to v1.0.27.

## v1.0.26 – Final Page Navigation Alignment
- Moved the Resources/Thank You navigation to the same full-width bottom rail used by the locked content pages.
- Matched the exact left/right insets, bottom spacing, button sizing, typography, and alignment.
- Removed the effect of the final page content padding on navigation placement.

# v1.0.25 — Resources / Thank You Global Layout Fix

- Reduced the three resource-card heights globally across desktop, Safari, and installed iPad Home Screen mode.
- Preserved the larger QR codes, phone numbers, shorter hero, and existing content.
- Prevented the card grid from stretching to fill excess vertical space.
- Realigned Previous and Start Over to the locked navigation side margins, height, size, and bottom spacing used on earlier pages.
- Updated the visible app version and service-worker cache version.

# v1.0.24 — Resources / Thank You Page

- Reduced the closing hero height by approximately 15–20%.
- Enlarged and vertically aligned the three resource cards.
- Increased all QR-code sizes and emphasized the phone numbers.
- Aligned icons, headings, QR codes, and footer labels across the cards.
- Positioned Previous and Start Over exactly like the locked navigation used on prior pages.
- Preserved clearance between the cards and navigation.


## v1.0.23 – Common Questions Card Height
- Restored the FAQ cards to their original 220px minimum height for readable back-side answers.
- Tightened the space below the subtitle to move the card grid upward.
- Maintained a 15px minimum buffer above the locked Previous/Next navigation.
- Preserved card width, emoji size, subtitle wording, shared header, and navigation placement.
# Common Questions Layout - v1.0.22

- Reduced FAQ card height by approximately 17 percent.
- Slightly widened the FAQ card columns by reducing side padding and column gaps.
- Reduced the gap between the shared subtitle and the card grid.
- Ensured the lower card row stays fully above the locked Previous/Next navigation.
- Left emoji size, subtitle wording, shared header, and navigation styling unchanged.

# v1.0.21 — Common Questions Shared Header

- Applied the locked shared header styling to the Common Questions page.
- Matched title size, position, underline, subtitle size, weight, spacing, and left alignment to the previous content pages.
- Removed the Common Questions subtitle's page-specific gradient callout and border styling.
- Left the FAQ card layout and content unchanged.
- Updated the visible version, JavaScript build version, and service-worker cache version.


## v1.0.19 – Installed iPad Who Should Be Screened Refinement
- Slightly enlarged the Average Risk and Increased Risk cards in installed iPad landscape mode.
- Increased risk badge and descriptive text sizes for easier viewing.
- Slightly enlarged the provider warning panel, heading, symptom text, and flag icon.
- Preserved safe spacing between cards, warning panel, and navigation.
- Safari and desktop layouts remain unchanged.
# Build v1.0.18 – Who Should Be Screened Option 1

- Kept the Average Risk and Increased Risk cards side by side.
- Moved the healthcare-provider warning upward by reclaiming space from the card area.
- Avoided negative margins so the provider warning cannot overlap the cards.
- Reserved the navigation area so the warning remains fully above Previous and Next.
- Added a targeted compact layout for installed iPad landscape mode.
- Preserved the locked shared header and previously locked pages.


## v1.0.16 – iPad Standalone Comparison Table Fill
- Kept the Safari comparison layout unchanged.
- Made the comparison table fill the available standalone iPad container height.
- Removed the unused blank area below the table by allowing row heights to expand evenly.
- Preserved the full table, insurance panel, navigation, and locked shared header.
# v1.0.15 – iPad Home Screen Comparison Fix

- Added dynamic viewport sizing for installed standalone mode.
- Added a compact comparison-table layout only for iPad Home Screen landscape mode.
- Left the Safari browser layout unchanged.
- Reduced table and insurance-panel spacing only when the standalone viewport is short.

## Screening Tests Title Alignment (v1.0.13)
- Matched the Screening Tests content top padding to the Why Screening Matters page.
- Matched the title bottom spacing to the Page 2 visual template.
- Preserved the larger cards, original card height, aligned titles, and enlarged QR code.
- Updated the app and service-worker cache version for deployment.


## Screening Tests Card Height Adjustment (v1.0.12)
- Restored the Screening Tests flip cards to their original 285px minimum height.
- Retained the wider card layout, larger illustrations, aligned title/subtitle rows, and enlarged QR code from v1.0.11.
- Removed the reduced-height overrides for portrait and shorter landscape displays.
- Updated the PWA build and cache version so deployed iPads receive the change.
# Screening Tests Layout Refinement - v1.0.11

- Matched the Screening Tests title and introductory text sizing to the Page 2 visual template.
- Increased the usable width of all three screening-test cards by reducing outer padding and card gaps.
- Reduced card height to remove unused vertical space.
- Enlarged the screening-test illustrations.
- Added a consistent subtitle row so Colonoscopy, FIT, and FIT-DNA headings align evenly.
- Increased the American Cancer Society QR code by approximately 15 percent.
- Updated the PWA build and service-worker cache version.

# UI Refresh - v1.0.10

- Replaced numbered progress circles with completed checkmarks, a solid current-page marker, and empty upcoming markers.
- Added a thin connecting progress line and reduced the progress area's vertical height.
- Added accessible progress status labels and `aria-current` for the active page.
- Reduced the Why Screening Matters title size.
- Widened the Page 2 content area and tightened vertical spacing.
- Increased the embedded Page 2 infographic approximately 8 percent, which also enlarges its Good News banner.
- Updated the service-worker cache and build version for deployment.

# PWA iPad Update Reliability - v1.0.9

- Disabled service-worker HTTP cache reuse with `updateViaCache: 'none'`.
- Added immediate `skipWaiting()` activation for newly installed service workers.
- Added cache-bypassing network requests for online app updates.
- Added update checks at startup, foreground return, page restore, reconnection, and every five minutes while visible.
- Added a versioned reload URL after the service-worker controller changes.
- Retained offline fallback and automatic deletion of old caches.

# Change Log

## Version 1.0 Release Candidate
- Final visual polish and color enhancements.
- Improved comparison table readability.
- Updated ACS screening coverage QR code.
- Updated community resource phone numbers.
- Added mailto QR code for Jungyoon Kim.
- Improved typography, spacing, and alignment.
- Final review before pilot testing.

## v1.0 PWA Session Management
- Added a 60-second inactivity timeout.
- Added a 10-second countdown warning with Continue Session and Return Now actions.
- Timed-out sessions return to the welcome screen and remove only the active incomplete session record.
- Previously completed session statistics remain stored.
- Inactivity timing pauses while the Admin panel is open.

## PWA Admin Protection Update
- Added password protection to the Admin panel.
- Set the current Admin password to `1026`.
- Prevented the Admin panel from opening after an incorrect or cancelled password entry.
- Corrected the authentication flow so the panel opens immediately after a valid password.
- Preserved inactivity-timer pausing while the authenticated Admin panel is open.

## Engagement Tracking Update
- Added summary metrics for sessions started, completed, incomplete, and last session date/time.
- Added automatic migration of existing localStorage session records.
- Added IndexedDB persistence with localStorage fallback.
- Preserved existing CSV export and completed-session data.


## Data Export Update
- Improved CSV generation with UTF-8 BOM and Windows-compatible line endings.
- Added date-stamped export filenames.
- Added iOS/iPadOS Share Sheet support using the Web Share API with file sharing.
- Retained standard CSV download as a fallback for unsupported browsers and devices.

## PWA Stability Release (v1.0.8)
- Changed page navigation caching to network-first with offline fallback.
- Added controlled service-worker activation and an update-available prompt.
- Added automatic update checks at launch and when the app becomes visible.
- Deletes old cache versions during service-worker activation.
- Fixed inactivity timer cleanup to prevent overlapping warning countdowns.
- Ensured timeout and Return Now close dialogs/admin, clear active UI state, scroll to top, and return to the Welcome screen.
- Preserves completed engagement statistics while clearing only the active timed-out session.

## Shared Page Header Component (v1.0.14)
- Added one shared header component for content Pages 2 through 6.
- Standardized title size, weight, underline, top spacing, and left alignment.
- Standardized subtitle size, weight, line height, and spacing.
- Page 4 now aligns to the same header baseline as Pages 2 and 3.
- Updated the PWA build and cache version to v1.0.14.

## v1.0.17 – Cost & Insurance Readability
- Increased the Cost & Insurance heading and body text for easier reading on iPad.
- Slightly enlarged the dollar icon.
- Enlarged the coverage QR code and added more spacing around it.
- Improved the coverage-information text wrapping.
- Preserved the standalone iPad table-fill behavior and Safari layout.
- Updated the PWA cache version so deployed devices receive the release.
## v1.0.20 – Welcome Screen Version Label
- Added a small, low-contrast version number to the bottom-left of the Welcome screen.
- Synchronized the visible version, application build constant, and service-worker cache version to v1.0.20.
- Kept the version label non-interactive and out of the primary kiosk workflow.

