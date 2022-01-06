import { RenderResult } from '@testing-library/react-hooks';

import { customRenderHook } from 'test/render';

import { SelectMultipleContextValue } from 'contexts/SelectMultiple';
import { SelectRangeContextValue } from 'contexts/SelectRange';
import { SelectSingleContextValue } from 'contexts/SelectSingle';
import { DayPickerProps } from 'types/DayPicker';

import { SelectedDays, useSelectedDays } from './useSelectedDays';

const today = new Date(2021, 11, 8);

const single: SelectSingleContextValue = {
  selected: today
};

const multiple: SelectMultipleContextValue = {
  selected: [today],
  modifiers: { disabled: [] }
};

const range: SelectRangeContextValue = {
  selected: undefined,
  modifiers: {
    disabled: [],
    range_start: [],
    range_end: [],
    range_middle: []
  }
};

let renderResult: RenderResult<SelectedDays>;
function setup(dayPickerProps: DayPickerProps) {
  const hookResult = customRenderHook(() => useSelectedDays(), dayPickerProps, {
    single,
    multiple,
    range
  });
  renderResult = hookResult.result;
}

describe('when in single selection mode', () => {
  const mode = 'single';
  beforeEach(() => {
    setup({ mode });
  });
  test('should return the selection from the single context', () => {
    expect(renderResult.current).toBe(single.selected);
  });
});

describe('when in multiple selection mode', () => {
  const mode = 'multiple';
  beforeEach(() => {
    setup({ mode });
  });
  test('should return the selection from the multiple context', () => {
    expect(renderResult.current).toBe(multiple.selected);
  });
});

describe('when in range selection mode', () => {
  const mode = 'multiple';
  beforeEach(() => {
    setup({ mode });
  });
  test('should return the selection from the range context', () => {
    expect(renderResult.current).toBe(range.selected);
  });
});
