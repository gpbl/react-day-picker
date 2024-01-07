import { DropdownMultipleMonths } from './DropdownMultipleMonths';
import { screen } from '@testing-library/react';
import { grid } from '../test/elements';
import { renderApp } from '../test/renderApp';
import { user } from '../test/user';

const today = new Date(2023, 9, 16);
jest.useFakeTimers().setSystemTime(today);

beforeEach(() => {
  renderApp(<DropdownMultipleMonths />);
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
