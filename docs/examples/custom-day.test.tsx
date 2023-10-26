import { app, freezeTime, renderApp } from '../../test';
import Example from './custom-day';

freezeTime(new Date(2021, 10, 25));

beforeEach(() => {
  renderApp(<Example />);
});

test('should render time elements', () => {
  const timeElements = app().getElementsByTagName('time');
  expect(timeElements).toHaveLength(35);
});
