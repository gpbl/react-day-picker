import { app } from '../test/elements';
import { renderApp } from '../test/renderApp';
import { StylingCss } from './StylingCss';

const today = new Date(2021, 10, 25);
jest.useFakeTimers().setSystemTime(today);

beforeEach(() => {
  renderApp(<StylingCss />);
});

test('the caption should use the custom class name', () => {
  expect(app().getElementsByClassName('caption_aqua')[0]).toHaveTextContent(
    'November 2021'
  );
});
