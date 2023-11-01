import { getMonthCaption } from 'react-day-picker/test/selectors';

import { freezeTime, renderApp } from '../../test';
import { StylingInline } from './StylingInline';

const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(() => {
  renderApp(<StylingInline />);
});

test('the caption should apply the custom style', () => {
  expect(getMonthCaption(0).parentElement).toHaveStyle({
    color: 'red'
  });
});
