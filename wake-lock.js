(function () {
  'use strict';

  var wakeLock = null;
  var requesting = false;

  async function requestWakeLock() {
    if (!('wakeLock' in navigator)) return;
    if (document.visibilityState !== 'visible') return;
    if (wakeLock || requesting) return;

    requesting = true;
    try {
      wakeLock = await navigator.wakeLock.request('screen');

      wakeLock.addEventListener('release', function () {
        wakeLock = null;
      });
    } catch (error) {
      console.warn('Screen Wake Lock request failed:', error);
      wakeLock = null;
    } finally {
      requesting = false;
    }
  }

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
      requestWakeLock();
    }
  });

  window.addEventListener('pageshow', requestWakeLock);
  window.addEventListener('focus', requestWakeLock);
  window.addEventListener('online', requestWakeLock);

  // Some browsers are more reliable when the request follows user interaction.
  ['pointerdown', 'touchstart', 'keydown', 'click'].forEach(function (eventName) {
    document.addEventListener(eventName, requestWakeLock, {
      passive: true,
      once: true
    });
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', requestWakeLock);
  } else {
    requestWakeLock();
  }
})();
