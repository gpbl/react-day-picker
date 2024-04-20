import { FocusContextValue } from "../src/contexts/Focus";
import { SelectMultipleContextValue } from "../src/contexts/SelectMultiple";
import { SelectRangeContextValue } from "../src/contexts/SelectRange";
import { SelectSingleContextValue } from "../src/contexts/SelectSingle";

const singleContext: SelectSingleContextValue = {
  selected: new Date(),
  onDayClick: jest.fn()
};

const multipleContext: SelectMultipleContextValue = {
  selected: [new Date()],
  modifiers: { disabled: [] },
  onDayClick: jest.fn()
};

const rangeContext: SelectRangeContextValue = {
  selected: undefined,
  modifiers: {
    disabled: [],
    range_start: [],
    range_end: [],
    range_middle: []
  },
  onDayClick: jest.fn()
};

const focusContext: FocusContextValue = {
  focus: jest.fn(),
  focusedDay: undefined,
  focusTarget: undefined,
  blur: jest.fn(),
  focusDayAfter: jest.fn(),
  focusDayBefore: jest.fn(),
  focusWeekBefore: jest.fn(),
  focusWeekAfter: jest.fn(),
  focusMonthBefore: jest.fn(),
  focusMonthAfter: jest.fn(),
  focusYearBefore: jest.fn(),
  focusYearAfter: jest.fn(),
  focusStartOfWeek: jest.fn(),
  focusEndOfWeek: jest.fn()
};

export const mockedContexts = {
  single: singleContext,
  multiple: multipleContext,
  range: rangeContext,
  focus: focusContext
};
