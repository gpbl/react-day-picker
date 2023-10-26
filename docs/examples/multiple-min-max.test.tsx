import { addDays } from 'date-fns';

import { app, axe, freezeTime, gridcell, renderApp, user } from '../../test';
import Example from './multiple-min-max';

const today = new Date(2021, 10, 10);
freezeTime(today);

const days = [
  today,
  addDays(today, 1),
  addDays(today, 2),
  addDays(today, 3),
  addDays(today, 4)
];

beforeEach(() => {
  renderApp(<Example />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

describe('when a day is clicked', () => {
  beforeEach(async () => {
    await user.click(gridcell(days[0]));
  });
  test('should appear as selected', () => {
    expect(gridcell(days[0])).toHaveAttribute('aria-selected', 'true');
  });
  test('should update the footer', () => {
    expect(app()).toHaveTextContent('You selected 1 day(s).');
  });
  test('should be accessible', async () => {
    expect(await axe(app())).toHaveNoViolations();
  });
  describe('when a second day is clicked', () => {
    beforeEach(async () => {
      await user.click(gridcell(days[1]));
    });
    test('the first day should appear as selected', () => {
      expect(gridcell(days[0])).toHaveAttribute('aria-selected', 'true');
    });
    test('the second day should appear as selected', () => {
      expect(gridcell(days[1])).toHaveAttribute('aria-selected', 'true');
    });
    test('should update the footer', () => {
      expect(app()).toHaveTextContent('You selected 2 day(s).');
    });
    test('should be accessible', async () => {
      expect(await axe(app())).toHaveNoViolations();
    });
    describe('when clicked again', () => {
      beforeEach(async () => {
        await user.click(gridcell(days[1]));
      });
      test('the first day should still appear as selected', () => {
        expect(gridcell(days[0])).toHaveAttribute('aria-selected', 'true');
      });
      test('the second day should still appear as selected', () => {
        expect(gridcell(days[1])).toHaveAttribute('aria-selected', 'true');
      });
      test('should update the footer', () => {
        expect(app()).toHaveTextContent('You selected 2 day(s).');
      });
      test('should be accessible', async () => {
        expect(await axe(app())).toHaveNoViolations();
      });
    });
  });
});

describe('when the first 5 days are clicked', () => {
  beforeEach(async () => {
    await user.click(gridcell(days[0]));
    await user.click(gridcell(days[1]));
    await user.click(gridcell(days[2]));
    await user.click(gridcell(days[3]));
    await user.click(gridcell(days[4]));
  });
  test.each(days)('the %s day should appear as selected', (day) => {
    expect(gridcell(day)).toHaveAttribute('aria-selected', 'true');
  });
  test('the sixth day should not appear as selected', () => {
    const day6 = addDays(today, 5);
    expect(gridcell(day6)).not.toHaveAttribute('aria-selected');
  });
});
