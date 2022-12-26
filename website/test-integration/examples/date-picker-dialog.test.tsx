import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { format } from 'date-fns';
import { act } from 'react-dom/test-utils';

import { getDayButton } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/date-picker-dialog';

const today = new Date(2022, 5, 10);
const tomorrow = new Date(2022, 5, 11);
freezeBeforeAll(today);

const user = userEvent.setup();

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
  render(<Example />);
});

describe('when clicking the dialog button', () => {
  beforeEach(async () => {
    await user.click(getDialogButton());
    await waitPopper();
  });
  test('the dialog should be visible', () => {
    expect(screen.getByRole('dialog')).toBeVisible();
  });
  test('the today button should have focus', () => {
    expect(getDayButton(today)).toHaveFocus();
  });
  describe('when clicking a day', () => {
    const date = today;
    beforeEach(async () => {
      await user.click(getDayButton(date));
      await waitPopper();
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
      test('the input should have the new date', () => {
        expect(getInput()).toHaveValue(format(newDate, 'y-MM-dd'));
      });
      describe('when clicking the dialog button', () => {
        beforeEach(async () => {
          await user.click(getDialogButton());
          await waitPopper();
        });
        test('the new date should be selected', () => {
          expect(getDayButton(newDate)).toHaveAttribute('aria-pressed', 'true');
        });
        test('the new date button should have focus', () => {
          expect(getDayButton(newDate)).toHaveFocus();
        });
      });
    });
  });
});
