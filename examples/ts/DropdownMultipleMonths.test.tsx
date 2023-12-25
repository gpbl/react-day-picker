import { DropdownMultipleMonths } from './DropdownMultipleMonths';
import { screen } from '@testing-library/react';

import { app, axe, freezeTime, renderApp, user } from '../../test';
import { grid } from '../../test/po';

const today = new Date(2023, 9, 16);
freezeTime(today);

beforeEach(() => {
  renderApp(<DropdownMultipleMonths />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

describe('when choosing a month from the first dropdown', () => {
  const monthName = 'January';
  beforeEach(async () => {
    const firstDropDown = screen.getAllByRole('combobox', {
      name: 'Month:'
    })[0];
    await user.selectOptions(firstDropDown, monthName);
  });
  test('should display the month in the first dropdown', () => {
    expect(grid(`${monthName} 2023`)).toBeInTheDocument();
  });
});

describe('when choosing a month from the third dropdown', () => {
  const newMonthName = 'October';
  beforeEach(async () => {
    const thirdDropDown = screen.getAllByRole('combobox', {
      name: 'Month:'
    })[2];
    await user.selectOptions(thirdDropDown, newMonthName);
  });
  test('should display the month selected the third dropdown', () => {
    expect(grid(`${newMonthName} 2023`)).toBeInTheDocument();
  });
});
