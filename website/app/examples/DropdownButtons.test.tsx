import {
  grid,
  monthDropdown,
  nextButton,
  previousButton,
  yearDropdown
} from '@/test/elements';
import { renderApp } from '@/test/renderApp';
import { user } from '@/test/user';

import { DropdownButtons } from './DropdownButtons';

const today = new Date(2022, 5, 10);
jest.useFakeTimers().setSystemTime(today);

beforeEach(() => {
  renderApp(<DropdownButtons />);
});

test('should display the year dropdown', () => {
  expect(yearDropdown()).toBeInTheDocument();
});
test('should display the month dropdown', () => {
  expect(monthDropdown()).toBeInTheDocument();
});
test('should render the next month button', () => {
  expect(nextButton()).toBeInTheDocument();
});
test('should render the previous month button', () => {
  expect(previousButton()).toBeInTheDocument();
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
