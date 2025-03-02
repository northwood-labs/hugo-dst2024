import { render } from 'preact';
import Domain from './Domain';
import HttpScore from './HttpScore';
import Timestamp from './Timestamp';
import TlsScore from './TlsScore';

(() => {
  const $ = e => document.getElementById(e),
    $q = s => document.querySelector(s);

  render(<Domain />, $("h-domain"));
  render(<Timestamp />, $("h-date"));
  render(<HttpScore />, $("http-versions"));
  render(<TlsScore />, $("tls-versions"));

  const $url = $('url');
  $url.value = (new URLSearchParams(location.search)).get('url');
  $url.onfocus = $url.select();
  $url.focus();
})();
