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

  async function apiAsync(endpoint) {
    const apiEndpoint = `${ window.apiHostname }/${ endpoint }${ location.search }`,
      response = await window.fetch(apiEndpoint, {
        method: 'GET',
        mode: 'cors',
        referrerPolicy: 'no-referrer',
      });

    return response.json();
  };

  window.apiAsync = apiAsync;

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
    const second = 1000,
      tls10 = 0x0301,
      tls11 = 0x0302,
      tls12 = 0x0303,
      tls13 = 0x0304;

    let missingVersions = [
      tls10,
      tls11,
      tls12,
      tls13,
    ];

    const tlsConvert = (versionId) => {
      switch (versionId) {
      case tls13:
        return 'tls13';
      case tls12:
        return 'tls12';
      case tls11:
        return 'tls11';
      case tls10:
        return 'tls10';
      default:
        window.console.log('This version of TLS is not understood.');
      }

      return '';
    };

    $('tls-versions').classList.remove('hidden');
    $('tls-spinner').classList.add('animate-back-out-right');
    window.setTimeout(() => {
      $('tls-spinner').classList.add('hidden');
    }, second);

    for (const [
      _, // eslint-disable-line no-unused-vars
      value,
    ] of Object.entries(tlsData.tlsConnections)) {
      missingVersions = missingVersions.filter(entry => entry !== value.versionId);

      const key = tlsConvert(value.versionId),
        elem = $q(`[x-ref="${ key }"]`);

      if (key === 'tls13' || key === 'tls12') {
        elem.classList.add('ui-badge-success-wrap');
        elem.classList.remove('ui-badge-neutral-wrap', 'ui-badge-error-wrap');
        elem.querySelector('svg').outerHTML = window.imageCheck;
        elem.innerHTML += ': Enabled';

        elem.classList.add('animate-flip-in-x');
        window.setTimeout(() => {
          elem.classList.remove('animate-flip-in-x');
        }, second);
      } else {
        elem.classList.add('ui-badge-error-wrap');
        elem.classList.remove('ui-badge-neutral-wrap', 'ui-badge-success-wrap');
        elem.querySelector('svg').outerHTML = window.imageX;
        elem.innerHTML += ': Enabled';

        elem.classList.add('animate-flip-in-x');
        window.setTimeout(() => {
          elem.classList.remove('animate-flip-in-x');
        }, second);
      }
    }

    missingVersions.forEach((versionId) => {
      const key = tlsConvert(versionId),
        elem = $q(`[x-ref="${ key }"]`);

      if (key === 'tls13' || key === 'tls12') {
        elem.classList.add('ui-badge-error-wrap');
        elem.classList.remove('ui-badge-neutral-wrap', 'ui-badge-success-wrap');
        elem.querySelector('svg').outerHTML = window.imageX;
        elem.innerHTML += ': Disabled';

        elem.classList.add('animate-flip-in-x');
        window.setTimeout(() => {
          elem.classList.remove('animate-flip-in-x');
        }, second);
      } else {
        elem.classList.add('ui-badge-success-wrap');
        elem.classList.remove('ui-badge-neutral-wrap', 'ui-badge-error-wrap');
        elem.querySelector('svg').outerHTML = window.imageCheck;
        elem.innerHTML += ': Disabled';

        elem.classList.add('animate-flip-in-x');
        window.setTimeout(() => {
          elem.classList.remove('animate-flip-in-x');
        }, second);
      }
    });
  };
})();
