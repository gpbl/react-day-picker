import { app } from '@test/elements';
import { renderApp } from '@test/renderApp';

import { StylingCssModules } from './StylingCssModules';

const today = new Date(2021, 10, 25);
jest.useFakeTimers().setSystemTime(today);

beforeEach(() => {
  renderApp(<StylingCssModules />);
});

test('should match the snapshot', () => {
  expect(app()).toMatchSnapshot();
});
