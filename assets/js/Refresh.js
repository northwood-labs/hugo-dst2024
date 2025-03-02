import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { PureComponent } from 'preact/compat';

export default class Refresh extends PureComponent {
  render(props) {
    return (
      <>
        <ArrowPathIcon className="h-5 w-5 inline-block align-middle" />
        <span class={props.className}>&nbsp;<a href="#" class="text-sm" onClick={() => { location.reload(); return false; }}>{props.label}</a></span>
      </>
    );
  }
}
