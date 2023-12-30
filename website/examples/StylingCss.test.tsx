import { StylingCss } from './StylingCss';

import { app, freezeTime, renderApp } from '../test';

const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(() => {
  renderApp(<StylingCss />);
});

test('the caption should use the custom class name', () => {
  expect(app().getElementsByClassName('caption_aqua')[0]).toHaveTextContent(
    'November 2021'
  );
});
