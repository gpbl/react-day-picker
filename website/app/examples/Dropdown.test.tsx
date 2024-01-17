import { grid, monthDropdown, yearDropdown } from '@/test/elements';
import { renderApp } from '@/test/renderApp';
import { user } from '@/test/user';

import { Dropdown } from './Dropdown';

const today = new Date(2022, 5, 10);
jest.useFakeTimers().setSystemTime(today);

beforeEach(() => {
  renderApp(<Dropdown />);
});

test('should display the month dropdown', () => {
  expect(monthDropdown()).toBeInTheDocument();
});

test('should display the year dropdown', () => {
  expect(yearDropdown()).toBeInTheDocument();
});

describe('when choosing a month', () => {
  const monthName = 'January';
  beforeEach(async () => {
    await user.selectOptions(monthDropdown(), monthName);
  });
  test('should display the month', () => {
    expect(grid()).toHaveAccessibleName(`${monthName} 2022`);
  });
});
