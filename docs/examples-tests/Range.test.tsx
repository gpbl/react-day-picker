import { addDays } from 'date-fns';
import { app, gridcell } from '../../test/po';
import { axe, freezeTime, renderApp, user } from '../../test';
import { Range } from '../examples/Range';

const today = new Date(2020, 10, 15);
freezeTime(today);

const days = [
  today,
  addDays(today, 1),
  addDays(today, 2),
  addDays(today, 3),
  addDays(today, 4)
];

beforeEach(() => {
  renderApp(<Range />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

test.each(days)('%s should be selected', (day) => {
  expect(gridcell(day)).toHaveAttribute('aria-selected', 'true');
});

describe('when a day in the range is clicked', () => {
  const day = days[2];
  beforeEach(() => {
    user.click(gridcell(day));
  });
  test.each([days[0], days[1], day])('%s should be selected', (day) => {
    expect(gridcell(day)).toHaveAttribute('aria-selected', 'true');
  });
  test.each([days[3], days[4]])('%s should not be selected', (day) => {
    expect(gridcell(day)).not.toHaveAttribute('aria-selected');
  });
  describe('when the day is clicked again', () => {
    const day = days[2];
    beforeEach(async () => {
      await user.click(gridcell(day));
    });
    test('only one day should be selected', () => {
      const selectedCells = app().querySelectorAll('[aria-selected="true"]');
      expect(selectedCells).toHaveLength(1);
    });
    test('only a day in the range should be selected', () => {
      expect(gridcell(day)).toHaveAttribute('aria-selected', 'true');
    });

    describe('when a day in the range is clicked again', () => {
      const day = days[2];
      beforeEach(async () => {
        await user.click(gridcell(day));
      });
      test('only one day should be selected', () => {
        const selectedCells = app().querySelectorAll('[aria-selected="true"]');
        expect(selectedCells).toHaveLength(1);
      });
      test('should match the snapshot', () => {
        expect(app).toMatchSnapshot();
      });
    });
  });
});
