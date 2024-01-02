import { RangeShiftKey } from './RangeShiftKey';
import { renderApp, user } from '../test';
import { fireEvent, screen } from '@testing-library/react';

const gridcell = (day: number) => {
  return screen.getByRole('gridcell', { name: day.toString() });
};

beforeEach(() => {
  renderApp(<RangeShiftKey />);
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('when a day is clicked', () => {
  beforeEach(async () => {
    await user.click(gridcell(1));
  });
  test('the clicked day should be selected', () => {
    expect(gridcell(1)).toHaveAttribute('aria-selected', 'true');
  });
  describe('when the day is clicked again', () => {
    beforeEach(async () => {
      await user.click(gridcell(1));
    });
    test('the clicked day should not  be selected', () => {
      expect(gridcell(1)).not.toHaveAttribute('aria-selected', 'true');
    });
  });
  describe('when another day is clicked', () => {
    beforeEach(async () => {
      await user.click(gridcell(2));
    });
    test('the clicked day should be selected', () => {
      expect(gridcell(2)).toHaveAttribute('aria-selected', 'true');
    });
    test('the previous clicked day should not be selected', () => {
      expect(gridcell(1)).not.toHaveAttribute('aria-selected', 'true');
    });
  });
  describe('while pressing the shift key', () => {
    beforeEach(() => {
      fireEvent.keyDown(window, {
        key: 'Shift',
        code: 'ShiftLeft',
        shiftKey: true
      });
    });

    describe('when another day is clicked', () => {
      beforeEach(async () => {
        await user.click(gridcell(2));
      });
      test('the clicked day should be selected', () => {
        expect(gridcell(2)).toHaveAttribute('aria-selected', 'true');
      });
      test('the previous clicked day should be selected', () => {
        expect(gridcell(1)).toHaveAttribute('aria-selected', 'true');
      });
    });

    describe('when this shift key is released', () => {
      beforeEach(() => {
        fireEvent.keyUp(window, { key: 'Shift', code: 'ShiftLeft' }); // Release Shift key
      });
      describe('when another day is clicked', () => {
        beforeEach(async () => {
          await user.click(gridcell(3));
        });
        test('the clicked day should be selected', () => {
          expect(gridcell(3)).toHaveAttribute('aria-selected', 'true');
        });
        test('the previous clicked day should not be selected', () => {
          expect(gridcell(1)).not.toHaveAttribute('aria-selected', 'true');
        });
      });
    });
  });
});
