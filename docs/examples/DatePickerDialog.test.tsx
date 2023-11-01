import { screen } from '@testing-library/react';
import { format } from 'date-fns';
import { act } from 'react-dom/test-utils';
import { app, axe, freezeTime, gridcell, renderApp, user } from '../../test';
import { DatePickerDialog } from './DatePickerDialog';

const today = new Date(2022, 5, 10);
const tomorrow = new Date(2022, 5, 11);
freezeTime(today);

const getDialogButton = () => {
  return screen.getByRole('button', { name: 'Pick a date' });
};

const getInput = () => {
  return screen.getByRole('textbox');
};

/** Fixes popper warnings, see https://github.com/floating-ui/floating-ui/issues/1520. */
async function waitPopper() {
  await act(async () => await null);
}

beforeEach(() => {
  renderApp(<DatePickerDialog />);
});

test('should be accessible', async () => {
  expect(await axe(app())).toHaveNoViolations();
});

describe('when clicking the dialog button', () => {
  beforeEach(async () => {
    await user.click(getDialogButton());
    await waitPopper();
  });
  test('should be accessible', async () => {
    expect(await axe(app())).toHaveNoViolations();
  });
  test('the dialog should be visible', () => {
    expect(screen.getByRole('dialog')).toBeVisible();
  });
  test('the today button should have focus', () => {
    expect(gridcell(today)).toHaveFocus();
  });
  describe('when clicking a day', () => {
    const date = today;
    beforeEach(async () => {
      await user.click(gridcell(date));
      await waitPopper();
    });
    test('should be accessible', async () => {
      expect(await axe(app())).toHaveNoViolations();
    });
    test('the dialog should be closed', () => {
      expect(screen.queryByRole('dialog')).toBeNull();
    });
    test('the input should have the selected date as value', () => {
      expect(getInput()).toHaveValue(format(today, 'y-MM-dd'));
    });
    describe('when typing a new date into the input', () => {
      const newDate = tomorrow;
      beforeEach(async () => {
        await user.clear(getInput());
        await user.type(getInput(), format(newDate, 'y-MM-dd'));
        await waitPopper();
      });
      test('should be accessible', async () => {
        expect(await axe(app())).toHaveNoViolations();
      });
      test('the input should have the new date', () => {
        expect(getInput()).toHaveValue(format(newDate, 'y-MM-dd'));
      });
      describe('when clicking the dialog button', () => {
        beforeEach(async () => {
          await user.click(getDialogButton());
          await waitPopper();
        });
        test('the new date should be selected', () => {
          expect(gridcell(newDate)).toHaveAttribute('aria-selected', 'true');
        });
        test('the new date button should have focus', () => {
          expect(gridcell(newDate)).toHaveFocus();
        });
        test('should be accessible', async () => {
          expect(await axe(app())).toHaveNoViolations();
        });
      });
    });
  });
});
