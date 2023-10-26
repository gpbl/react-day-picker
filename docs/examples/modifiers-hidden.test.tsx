import { screen } from '@testing-library/react';
import { freezeTime, renderApp } from '../../test';
import Example from './modifiers-hidden';

const days = [
  new Date(2022, 5, 10),
  new Date(2022, 5, 20),
  new Date(2022, 5, 11)
];

const today = new Date(2021, 10, 25);
freezeTime(today);

test.each(days)('the day %s should be hidden', (day) => {
  renderApp(<Example />);
  expect(
    screen.queryByRole('gridcell', { name: `${day.getDate()}` })
  ).not.toBeInTheDocument();
});
