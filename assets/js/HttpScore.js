import { PureComponent } from 'preact/compat';
import Refresh from './Refresh';
import SvgCheck from './SvgCheck';
import SvgSpinner from './SvgSpinner';
import SvgX from './SvgX';

export default class HttpScore extends PureComponent {
  componentDidMount() {
    window.fetch(`${ window.apiHostname }/http${ location.search }`, {
      method: 'GET',
      mode: 'cors',
      referrerPolicy: 'no-referrer',
    }).then(response => response.json()).
      then(data => this.setState({ data: data }));
  }

  render(props, state) {
    if (state.data) {
      if (state.data.error) {
        window.console.error(`HttpScore: ${ state.data.error }`);

        return <Refresh className={'text-sm'} label={'Error loading data. Try again?'} />;
      }

      return (
        <>
          {state.data.http11
            ? <SvgCheck className={'ui-badge-wrap ui-badge-success-wrap animate-flip-in-x'} label={'HTTP/1.1'} />
            : <SvgX className={'ui-badge-wrap ui-badge-error-wrap animate-flip-in-x'} label={'HTTP/1.1'} />}

          {state.data.http2
            ? <SvgCheck className={'ui-badge-wrap ui-badge-success-wrap animate-flip-in-x'} label={'HTTP/2'} />
            : <SvgX className={'ui-badge-wrap ui-badge-error-wrap animate-flip-in-x'} label={'HTTP/2'} />}

          {state.data.http3
            ? <SvgCheck className={'ui-badge-wrap ui-badge-success-wrap animate-flip-in-x'} label={'HTTP/3'} />
            : <SvgX className={'ui-badge-wrap ui-badge-error-wrap animate-flip-in-x'} label={'HTTP/3'} />}
        </>
      );
    }

    return <SvgSpinner />;
  }
}
