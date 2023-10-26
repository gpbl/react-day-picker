import { app, freezeTime, renderApp } from '../../test';
import Example from './styling-css-modules';

const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(() => {
  renderApp(<Example />);
});

test('should match the snapshot', () => {
  expect(app()).toMatchSnapshot();
});
