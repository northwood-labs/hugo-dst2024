import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { PureComponent } from 'preact/compat';

export default class Domain extends PureComponent {
  constructor() {
    super();
  }

  componentDidMount() {

    // The server-side version performs additional validation to avoid XSS.
    window.fetch(`${ window.apiHostname }/http${ location.search }`, {
      method: 'GET',
      mode: 'cors',
      referrerPolicy: 'no-referrer',
    }).then((response) => response.json())
    .then(data => this.setState({ data }));
  }

  render(props, state) {
    if (state.data) {
      if (state.data.error) {
        return <ExclamationTriangleIcon className="h-5 w-5 inline-block align-middle" />
      }

      return state.data.hostname.replace(/^https?:\/\//u, '');
    }

    return 'loading…';
  }
}
