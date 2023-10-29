import { app, freezeTime, renderApp } from '../../test';
import { StylingCssModules } from './StylingCssModules';

const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(() => {
  renderApp(<StylingCssModules />);
});

test('should match the snapshot', () => {
  expect(app()).toMatchSnapshot();
});
