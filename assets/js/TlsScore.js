import { PureComponent } from 'preact/compat';
import Refresh from './Refresh';
import SvgAlert from './SvgAlert';
import SvgCheck from './SvgCheck';
import SvgSpinner from './SvgSpinner';
import SvgX from './SvgX';

export default class TlsScore extends PureComponent {
  componentDidMount() {
    window.fetch(`${ window.apiHostname }/tls${ location.search }`, {
      method: 'GET',
      mode: 'cors',
      referrerPolicy: 'no-referrer',
    }).then(response => response.json()).
      then(data => this.setState({ data: data }));
  }

  render(props, state) {
    if (state.data) {
      if (state.data.error) {
        window.console.error(`TlsScore: ${ state.data.error }`);

        return <Refresh className={'text-sm'} label={'Error loading data. Try again?'} />;
      }

      return (
        <table class={'ui-table'}>
          <thead class={'ui-table-section'}>
            <tr class={'ui-thead-tr'}>
              <th class={'ui-thead-th'} colspan={'2'} scope={'colgroup'}>
                <span class={'inline-block pl-2 sm:pl-4'}>{'Protocols'}</span>
              </th>
            </tr>
          </thead>

          <tbody class={'ui-table-section'} x-data={'ciphersuites'}>
            <tr>
              <td class={'ui-tbody-td-key'}>
                <span class={'inline-block pl-2 sm:pl-4'}>{'Secure protocols, should be enabled'}</span>
              </td>

              <td class={'ui-tbody-td-value'}>
                {state.data.tlsVersions.tls13
                  ? <SvgCheck
                      className={'ui-badge-wrap ui-badge-success-wrap animate-flip-in-x'}
                      label={'TLS 1.3 enabled'}
                    />
                  : <SvgX
                      className={'ui-badge-wrap ui-badge-error-wrap animate-flip-in-x'}
                      label={'TLS 1.3 disabled'}
                    />}

                {state.data.tlsVersions.tls12
                  ? <SvgCheck
                      className={'ui-badge-wrap ui-badge-success-wrap animate-flip-in-x'}
                      label={'TLS 1.2 enabled'}
                    />
                  : <SvgX
                      className={'ui-badge-wrap ui-badge-error-wrap animate-flip-in-x'}
                      label={'TLS 1.2 disabled'}
                    />}
              </td>
            </tr>

            <tr>
              <td class={'ui-tbody-td-key'}>
                <span class={'inline-block pl-2 sm:pl-4'}>{'Insecure protocols, should be disabled'}</span>
              </td>

              <td class={'ui-tbody-td-value'}>
                {!state.data.tlsVersions.tls11
                  ? <SvgCheck className={'ui-badge-wrap ui-badge-success-wrap animate-flip-in-x'} label={'TLS 1.1 disabled'} />
                  : <SvgX className={'ui-badge-wrap ui-badge-error-wrap animate-flip-in-x'} label={'TLS 1.1 enabled'} />}

                {!state.data.tlsVersions.tls10
                  ? <SvgCheck className={'ui-badge-wrap ui-badge-success-wrap animate-flip-in-x'} label={'TLS 1.0 disabled'} />
                  : <SvgX className={'ui-badge-wrap ui-badge-error-wrap animate-flip-in-x'} label={'TLS 1.0 enabled'} />}
              </td>
            </tr>

            {state.data.tlsConnections?.map(conn => (
              <>
                <tr class={'h-8'} />

                <tr class={'ui-thead-tr'}>
                  <th class={'ui-thead-th'} colspan={'2'} scope={'colgroup'}>
                    <span class={'inline-block pl-2 sm:pl-4'}>{conn.version.replace(/v/, ' ')}{' cipher suites'}</span>
                  </th>
                </tr>

                {conn.cipherSuites.map(suite => (
                  <tr>
                    <td class={'ui-tbody-td-key'}>
                      <span class={'inline-block pl-2 sm:pl-4'}>
                        <code class={'not-prose code'}>{suite.ianaName}</code>
                      </span>
                    </td>

                    <td class={'ui-tbody-td-value'}>
                      {suite.strength === 'Recommended' || suite.strength === 'Secure'
                        ? <SvgCheck className={'ui-badge-wrap ui-badge-success-wrap animate-flip-in-x'} label={suite.strength} />
                        : suite.strength === 'Weak'
                          ? <SvgAlert className={'ui-badge-wrap ui-badge-alert-wrap animate-flip-in-x'} label={'Vulnerable'} />
                          : <SvgX className={'ui-badge-wrap ui-badge-error-wrap animate-flip-in-x'} label={'Insecure'} />}

                      {suite.isPFS
                        ? <SvgCheck className={'ui-badge-wrap ui-badge-success-wrap animate-flip-in-x'} label={'Forward Secrecy'} />
                        : <SvgAlert className={'ui-badge-wrap ui-badge-alert-wrap animate-flip-in-x'} label={'No Forward Secrecy'} />}

                      {suite.isAEAD
                        ? <SvgCheck className={'ui-badge-wrap ui-badge-success-wrap animate-flip-in-x'} label={'Strong Privacy'} />
                        : <SvgAlert className={'ui-badge-wrap ui-badge-alert-wrap animate-flip-in-x'} label={'Weak Privacy'} />}
                    </td>
                  </tr>
                ))}

              </>
            ))}

          </tbody>
        </table>
      );
    }

    return <SvgSpinner />;
  }
}
