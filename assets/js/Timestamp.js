import { PureComponent } from 'preact/compat';

export default class Timestamp extends PureComponent {
  render() {
    const now = new Date();

    return now.toLocaleTimeString(undefined, { // eslint-disable-line no-undefined
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}
