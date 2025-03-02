import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { PureComponent } from 'preact/compat';

export default class SvgAlert extends PureComponent {
  render(props) {
    return (
      <span class={props.className}>
        <ExclamationTriangleIcon className="ui-badge-svg ui-badge-alert-svg" /> {props.label}
      </span>
    );
  }
}
