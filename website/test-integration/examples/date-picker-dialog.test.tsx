import React from 'react';
import { clickDay, getDayButton } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/date-picker-dialog';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { format } from 'date-fns';

const today = new Date(2022, 5, 10);
const tomorrow = new Date(2022, 5, 11);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example today={today} />);
});

const getDialogButton = () => {
  return screen.getByRole('button', { name: /^Choose date/ });
};

const getInput = () => {
  return screen.getByRole('textbox');
};

const openDialog = () => {
  userEvent.click(getDialogButton());
};

describe('when the user clicks the button to open the dialog', () => {
  beforeEach(() => {
    openDialog();
  });
  test('the dialog should be open', () => {
    expect(screen.getByRole('dialog')).toBeVisible();
  });
  test('the current day button should be focused', () => {
    expect(getDayButton(today)).toHaveFocus();
  });
  describe('when clicking the current day', () => {
    beforeEach(() => {
      clickDay(today);
    });
    test('the dialog should be closed', () => {
      expect(screen.queryByRole('dialog')).toBeNull();
    });
    test('the selected date should be written to the input', () => {
      expect(getInput()).toHaveValue(format(today, 'P'));
    });
    describe('when typing a new date into the input', () => {
      const newDate = tomorrow;
      beforeEach(() => {
        const input = getInput();
        userEvent.clear(input);
        userEvent.type(input, format(newDate, 'P'));
      });
      describe('and then opening the dialog', () => {
        beforeEach(() => {
          openDialog();
        });
        test('the input should have the new date', () => {
          expect(getInput()).toHaveValue(format(newDate, 'P'));
        });
        test('the new date should be selected', () => {
          expect(getDayButton(newDate)).toHaveClass('rdp-day_selected');
        });
        test('the new date should be focused', () => {
          expect(getDayButton(newDate)).toHaveFocus();
        });
      });
    });
  });
});
