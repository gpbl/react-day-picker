import { app, freezeTime, renderApp } from '../../test';
import Example from './styling-css';

const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(() => {
  renderApp(<Example />);
});

test('the caption should use the custom class name', () => {
  expect(app().getElementsByClassName('caption_aqua')[0]).toHaveTextContent(
    'November 2021'
  );
});
