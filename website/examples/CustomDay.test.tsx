import { app } from '@/test/elements';
import { renderApp } from '@/test/renderApp';

import { CustomDay } from './CustomDay';

jest.useFakeTimers().setSystemTime(new Date(2021, 10, 25));

beforeEach(() => {
  renderApp(<CustomDay />);
});

test('should render time elements', () => {
  const timeElements = app().getElementsByTagName('time');
  expect(timeElements).toHaveLength(35);
});
