import React from "react";

import Example from "@examples/keyboard";
import { axe } from "@site/test/axe";
import { user } from "@site/test/user";
import { freezeBeforeAll } from "@site/test/utils";
import { focusDaysGrid } from "@site/test/utils/focusDaysGrid";
import { act, render } from "@testing-library/react";
import { addDays, addMonths, startOfMonth } from "date-fns";
import { DayPickerProps } from "react-day-picker";

import {
  getDayButton,
  getFocusedElement,
  getNextButton,
  getPrevButton
} from "../../../test/selectors";

const yesterday = new Date(2022, 5, 9);
const today = new Date(2022, 5, 10);
const tomorrow = new Date(2022, 5, 11);
freezeBeforeAll(today);

let container: HTMLElement;
function setup(props: DayPickerProps) {
  container = render(<Example {...props} />).container;
}

describe.each(["ltr", "rtl"])("when text direction is %s", (dir: string) => {
  describe("when pressing Tab", () => {
    beforeEach(async () => {
      setup({ mode: "single", dir });
      await act(() => user.tab());
    });
    test("should not have AXE violations", async () => {
      expect(await axe(container)).toHaveNoViolations();
    });
    test("should focus on the Previous Month button", () => {
      expect(getPrevButton()).toHaveFocus();
    });
    describe("when pressing Tab a second time", () => {
      beforeEach(async () => act(() => user.tab()));
      test("should focus on the Next Month button", () => {
        expect(getNextButton()).toHaveFocus();
      });
      describe("when pressing Tab a third time", () => {
        beforeEach(async () => act(() => user.tab()));
        test("should have the current day selected", () => {
          expect(getDayButton(today)).toHaveFocus();
        });

        const tests: [key: string, handler: () => Promise<void>][] = [
          ["ArrowDown", () => user.type(getFocusedElement(), "{arrowdown}")],
          ["ArrowUp", () => user.type(getFocusedElement(), "{arrowup}")],
          ["ArrowLeft", () => user.type(getFocusedElement(), "{arrowleft}")],
          ["ArrowRight", () => user.type(getFocusedElement(), "{arrowright}")]
        ];
        describe.each(tests)(`when pressing %s`, (key, handler) => {
          let focusedElement: Element;
          beforeEach(async () => {
            await act(() => handler());
            focusedElement = getFocusedElement();
          });
          describe("when the next button is focused", () => {
            beforeEach(() => act(() => getNextButton().focus()));
            test(`the element focused with ${key} should have lost the focus`, () => {
              expect(focusedElement).not.toHaveFocus();
            });
            describe("when pressing Tab", () => {
              beforeEach(async () => act(() => user.tab()));
              test(`the element focused with ${key} should have focus again`, () => {
                expect(focusedElement).toHaveFocus();
              });
            });
          });
          describe("when navigating to the next month", () => {
            beforeEach(async () => {
              await act(() => user.tab({ shift: true }));
              await act(() => user.keyboard("{enter}"));
              await act(() => user.tab());
            });
            test("the first active day of the next month should have focus", () => {
              const startOfNextMonth = startOfMonth(addMonths(today, 1));
              expect(getDayButton(startOfNextMonth)).toHaveFocus();
            });
          });
        });
      });
    });
  });

  describe("when a day is selected", () => {
    const selected = tomorrow;
    beforeEach(() => {
      setup({ mode: "single", dir, selected });
    });
    describe("when focusing the days grid", () => {
      beforeEach(() => focusDaysGrid());
      test("the selected day should have focus", () => {
        expect(getDayButton(tomorrow)).toHaveFocus();
      });
    });
  });

  describe("when multiple days are selected", () => {
    const mode = "multiple";
    const selected = [yesterday, tomorrow];
    beforeEach(() => {
      setup({ dir, selected, mode });
    });
    describe("when focusing the days grid", () => {
      beforeEach(() => focusDaysGrid());

      test("the first selected day should have focus", () => {
        expect(getDayButton(yesterday)).toHaveFocus();
      });
    });
  });

  describe("when showing multiple months", () => {
    const numberOfMonths = 3;
    describe("when today falls into the last month", () => {
      const defaultMonth = addMonths(today, -numberOfMonths + 1);
      beforeEach(() => {
        setup({ mode: "single", dir, defaultMonth, numberOfMonths });
      });
      describe("when focusing the days grid", () => {
        beforeEach(() => focusDaysGrid());
        test("the today button should have focus", () => {
          expect(getDayButton(today, 2)).toHaveFocus();
        });
      });
    });
  });

  describe("with disabled and hidden days, when no days are selected", () => {
    const firstDayOfMonth = startOfMonth(today);
    const secondDayOfMonth = addDays(firstDayOfMonth, 1);
    const notDisabled = addDays(firstDayOfMonth, 2);
    const disabled = [firstDayOfMonth, today];
    const hidden = secondDayOfMonth;
    const selected = undefined;
    beforeEach(() => {
      setup({ mode: "single", dir, disabled, hidden, selected });
    });
    describe("when focusing the days grid", () => {
      beforeEach(() => focusDaysGrid());
      test("the first not disabled day should have focus", () => {
        expect(getDayButton(notDisabled)).toHaveFocus();
      });
    });
  });
});
