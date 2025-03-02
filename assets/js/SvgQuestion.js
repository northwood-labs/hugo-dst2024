import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { PureComponent } from 'preact/compat';

export default class SvgQuestion extends PureComponent {
  render(props) {
    return (
      <span class={props.className}>
        <QuestionMarkCircleIcon className="ui-badge-svg ui-badge-neutral-svg" /> {props.label}
      </span>
    );
  }
}
