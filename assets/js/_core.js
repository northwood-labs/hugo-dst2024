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
})();
