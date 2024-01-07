import { app } from '../test/elements';
import { renderApp } from '../test/renderApp';
import { DayPicker } from './DayPicker';

jest.useFakeTimers().setSystemTime(new Date('2023-12-10'));

test('should render a date picker component', () => {
  renderApp(<DayPicker />);
  expect(app()).toMatchSnapshot();
});
