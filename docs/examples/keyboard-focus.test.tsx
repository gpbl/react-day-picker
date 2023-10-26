import { DayPickerProps } from 'react-day-picker';
import { getFocusedElement } from 'react-day-picker/test/selectors';

import { addDays, addMonths, startOfMonth } from 'date-fns';
import {
  app,
  axe,
  focusDaysGrid,
  freezeTime,
  gridcell,
  nextButton,
  previousButton,
  renderApp,
  user
} from '../../test';
import Example from './keyboard';

const yesterday = new Date(2022, 5, 9);
const today = new Date(2022, 5, 10);
const tomorrow = new Date(2022, 5, 11);
freezeTime(today);

function setup(props: DayPickerProps) {
  renderApp(<Example {...props} />);
}

describe.each(['ltr', 'rtl'])('when text direction is %s', (dir: string) => {
  describe('when pressing Tab', () => {
    beforeEach(async () => {
      setup({ mode: 'single', dir });
      await user.tab();
    });
    test('should be accessible', async () => {
      expect(await axe(app())).toHaveNoViolations();
    });
    test('should focus on the Previous Month button', () => {
      expect(previousButton()).toHaveFocus();
    });
    describe('when pressing Tab a second time', () => {
      beforeEach(async () => {
        await user.tab();
      });
      test('should focus on the Next Month button', () => {
        expect(nextButton).toHaveFocus();
      });
      describe('when pressing Tab a third time', () => {
        beforeEach(async () => {
          await user.tab();
        });
        test('should have the current day selected', () => {
          expect(gridcell(today)).toHaveFocus();
        });

        const tests: [key: string, handler: () => Promise<void>][] = [
          ['ArrowDown', () => user.type(getFocusedElement(), '{arrowdown}')],
          ['ArrowUp', () => user.type(getFocusedElement(), '{arrowup}')],
          ['ArrowLeft', () => user.type(getFocusedElement(), '{arrowleft}')],
          ['ArrowRight', () => user.type(getFocusedElement(), '{arrowright}')]
        ];
        describe.each(tests)(`when pressing %s`, (key, handler) => {
          let focusedElement: Element;
          beforeEach(async () => {
            await handler();
            focusedElement = getFocusedElement();
          });
          describe('when the next button is focused', () => {
            beforeEach(() => {
              nextButton().focus();
            });
            test(`the element focused with ${key} should have lost the focus`, () => {
              expect(focusedElement).not.toHaveFocus();
            });
            describe('when pressing Tab', () => {
              beforeEach(async () => {
                await user.tab();
              });
              test(`the element focused with ${key} should have focus again`, () => {
                expect(focusedElement).toHaveFocus();
              });
            });
          });
          describe('when navigating to the next month', () => {
            beforeEach(async () => {
              await user.tab({ shift: true });
              await user.keyboard('{enter}');
              await user.tab();
            });
            test('the first active day of the next month should have focus', () => {
              const startOfNextMonth = startOfMonth(addMonths(today, 1));
              expect(gridcell(startOfNextMonth)).toHaveFocus();
            });
          });
        });
      });
    });
  });

  describe('when a day is selected', () => {
    const selected = tomorrow;
    beforeEach(() => {
      setup({ mode: 'single', dir, selected });
    });
    describe('when focusing the days grid', () => {
      beforeEach(() => {
        focusDaysGrid();
      });
      test('the selected day should have focus', () => {
        expect(gridcell(tomorrow)).toHaveFocus();
      });
    });
  });

  describe('when multiple days are selected', () => {
    const mode = 'multi';
    const selected = [yesterday, tomorrow];
    beforeEach(() => {
      setup({ dir, selected, mode });
    });
    describe('when focusing the days grid', () => {
      beforeEach(() => {
        focusDaysGrid();
      });

      test('the first selected day should have focus', () => {
        expect(gridcell(yesterday)).toHaveFocus();
      });
    });
  });

  describe('when showing multiple months', () => {
    const numberOfMonths = 3;
    describe('when today falls into the last month', () => {
      const defaultMonth = addMonths(today, -numberOfMonths + 1);
      beforeEach(() => {
        setup({ mode: 'single', dir, defaultMonth, numberOfMonths });
      });
      describe('when focusing the days grid', () => {
        beforeEach(() => {
          focusDaysGrid();
        });
        test('the today button should have focus', () => {
          expect(gridcell(today)).toHaveFocus();
        });
      });
    });
  });

  describe('with disabled and hidden days, when no days are selected', () => {
    const firstDayOfMonth = startOfMonth(today);
    const secondDayOfMonth = addDays(firstDayOfMonth, 1);
    const notDisabled = addDays(firstDayOfMonth, 2);
    const disabled = [firstDayOfMonth, today];
    const hidden = secondDayOfMonth;
    const selected = undefined;
    beforeEach(() => {
      setup({ mode: 'single', dir, disabled, hidden, selected });
    });
    describe('when focusing the days grid', () => {
      beforeEach(() => {
        focusDaysGrid();
      });
      test('the first not disabled day should have focus', () => {
        expect(gridcell(notDisabled)).toHaveFocus();
      });
    });
  });
});
