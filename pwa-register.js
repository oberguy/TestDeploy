(function () {
  if (!('serviceWorker' in navigator)) return;

  function registerServiceWorker() {
    navigator.serviceWorker.register('./service-worker.js', { scope: './' }).then(function (registration) {
      function promptForUpdate(worker) {
        if (!worker) return;
        var updateNow = window.confirm('A new version of CRC Kiosk is available. Refresh now?');
        if (updateNow) worker.postMessage({ type: 'SKIP_WAITING' });
      }

      if (registration.waiting && navigator.serviceWorker.controller) {
        promptForUpdate(registration.waiting);
      }

      registration.addEventListener('updatefound', function () {
        var newWorker = registration.installing;
        if (!newWorker) return;
        newWorker.addEventListener('statechange', function () {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            promptForUpdate(newWorker);
          }
        });
      });
    }).catch(function (error) {
      console.warn('Service worker registration failed:', error);
    });
  }

  var refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', function () {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });

  window.addEventListener('load', registerServiceWorker);
})();
