(() => {
  const $ = e => document.getElementById(e),
    $q = s => document.querySelector(s);

  window.getDate = function() {
    const now = new Date();

    return now.toLocaleTimeString(undefined, { // eslint-disable-line no-undefined
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  window.api = function(endpoint, cb) {
    const apiEndpoint = `${ window.apiHostname }/${ endpoint }${ location.search }`;

    try {
      window.fetch(apiEndpoint, {
        method: 'GET',
        mode: 'cors',
        referrerPolicy: 'no-referrer',
      }).then((response) => {
        response.json().then((data) => {
          cb(data);
        });
      });
    } catch (error) {
      window.console.error(error.message);
    }
  };

  window.handleHTTP = function(httpData) {
    const second = 1000;

    if (httpData.hostname) {
      $('h_domain').innerText = httpData.hostname.replace(/^https?:\/\//u, '') || 'loading…';
    }

    $('http-versions').classList.remove('hidden');
    $('http-spinner').classList.add('animate-back-out-right');
    window.setTimeout(() => {
      $('http-spinner').classList.add('hidden');
    }, second);

    for (const [
      key,
      value,
    ] of Object.entries(httpData)) {
      if (key === 'hostname') {
        continue;
      }

      const elem = $q(`[x-ref="${ key }"]`);

      if (value === true) {
        elem.classList.add('ui-badge-success-wrap');
        elem.classList.remove('ui-badge-neutral-wrap', 'ui-badge-error-wrap');
        elem.querySelector('svg').outerHTML = window.imageCheck;

        elem.classList.add('animate-flip-in-x');
        window.setTimeout(() => {
          elem.classList.remove('animate-flip-in-x');
        }, second);
      } else if (value === false) {
        elem.classList.add('ui-badge-error-wrap');
        elem.classList.remove('ui-badge-neutral-wrap', 'ui-badge-success-wrap');
        elem.querySelector('svg').outerHTML = window.imageX;

        elem.classList.add('animate-flip-in-x');
        window.setTimeout(() => {
          elem.classList.remove('animate-flip-in-x');
        }, second);
      }
    }
  };

  window.handleTLS = function(tlsData) {
    window.console.log(tlsData);
  };
})();
