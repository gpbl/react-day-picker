import { axe, freezeTime, renderApp, user } from '../../test';
import { app, grid, monthDropdown, yearDropdown } from '../../test/po';
import { Dropdown } from './Dropdown';

const today = new Date(2022, 5, 10);
freezeTime(today);

beforeEach(() => {
  renderApp(<Dropdown />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

test('should display the year dropdown', () => {
  expect(yearDropdown()).toBeInTheDocument();
});
test('should display the month dropdown', () => {
  expect(monthDropdown()).toBeInTheDocument();
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
