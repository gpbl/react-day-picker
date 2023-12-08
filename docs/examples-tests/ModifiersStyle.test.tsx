import { ModifiersStyle } from '../examples/ModifiersStyle';

import { freezeTime, gridcell, renderApp } from '../../test';

const today = new Date(2021, 10, 25);
freezeTime(today);

beforeEach(() => {
  renderApp(<ModifiersStyle />);
});

const days = [new Date(2021, 5, 23), new Date(2021, 5, 24)];
const style = {
  fontWeight: 900,
  color: 'lightgreen'
};
test.each(days)('The day %s should have the proper inline style', (day) => {
  expect(gridcell(day)).toHaveStyle(style);
});