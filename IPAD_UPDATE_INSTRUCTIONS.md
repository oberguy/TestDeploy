# iPad update instructions

This release changes the service-worker update strategy. After publishing the files:

1. Confirm the iPad is online.
2. Fully close the kiosk app from the iPad app switcher.
3. Open the kiosk from its Home Screen icon.
4. Leave it open online for several seconds. The new worker activates automatically and reloads the app.

For an iPad that remains stuck on a release older than v1.0.9, open the site once in Safari, refresh it, then fully close and reopen the Home Screen app. Removing and re-adding the Home Screen icon should only be needed as a last resort.
