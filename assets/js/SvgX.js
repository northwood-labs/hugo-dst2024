import { XCircleIcon } from '@heroicons/react/24/solid';
import { PureComponent } from 'preact/compat';

export default class SvgX extends PureComponent {
  render(props) {
    return (
      <span class={props.className}>
        <XCircleIcon className="ui-badge-svg ui-badge-error-svg" /> {props.label}
      </span>
    );
  }
}
