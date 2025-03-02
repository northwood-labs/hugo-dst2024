import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { PureComponent } from 'preact/compat';

export default class SvgCheck extends PureComponent {
  render(props) {
    return (
      <span class={props.className}>
        <CheckCircleIcon className="ui-badge-svg ui-badge-success-svg" /> {props.label}
      </span>
    );
  }
}
