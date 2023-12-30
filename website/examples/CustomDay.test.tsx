import { CustomDay } from './CustomDay';

import { app, freezeTime, renderApp } from '../test';

freezeTime(new Date(2021, 10, 25));

beforeEach(() => {
  renderApp(<CustomDay />);
});

test('should render time elements', () => {
  const timeElements = app().getElementsByTagName('time');
  expect(timeElements).toHaveLength(35);
});
