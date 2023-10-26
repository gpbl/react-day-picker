import {
  app,
  axe,
  freezeTime,
  grid,
  monthDropdown,
  nextButton,
  previousButton,
  renderApp,
  user,
  yearDropdown
} from '../../test';
import Example from './dropdown-buttons';

const today = new Date(2022, 5, 10);
freezeTime(today);

beforeEach(() => {
  renderApp(<Example />);
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
  test('should be accessible', async () => {
    expect(await axe(app())).toHaveNoViolations();
  });
  test('should display the month', () => {
    expect(grid()).toHaveAccessibleName(`${monthName} 2022`);
  });
});
