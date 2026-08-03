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
