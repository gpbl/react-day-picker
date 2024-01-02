import { app, freezeTime, renderApp } from '../test';
import { CustomDay } from './CustomDay';

freezeTime(new Date(2021, 10, 25));

beforeEach(() => {
  renderApp(<CustomDay />);
});

test('should render time elements', () => {
  const timeElements = app().getElementsByTagName('time');
  expect(timeElements).toHaveLength(35);
});
