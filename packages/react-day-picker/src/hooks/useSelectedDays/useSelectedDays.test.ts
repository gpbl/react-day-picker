import { DayPickerProps } from 'DayPicker';

import { renderDayPickerHook } from 'test/render';
import { freezeBeforeAll, mockedContexts } from 'test/utils';

import { SelectSingleContextValue } from 'contexts/SelectSingle';

import { useSelectedDays } from './useSelectedDays';

const today = new Date(2021, 11, 8);
freezeBeforeAll(today);

function renderHook(
  dayPickerProps: DayPickerProps,
  contexts?: Partial<{ single: SelectSingleContextValue }>
) {
  return renderDayPickerHook(() => useSelectedDays(), dayPickerProps, {
    ...mockedContexts,
    ...contexts
  });
}

describe('when in single selection mode', () => {
  const mode = 'single';
  test('should return the selection from the single context', () => {
    const result = renderHook({ mode, selected: today });
    expect(result).toBe(mockedContexts.single.selected);
  });
});

describe('when in multiple selection mode', () => {
  const mode = 'multiple';
  test('should return the selection from the multiple context', () => {
    const result = renderHook({ mode });
    expect(result).toBe(mockedContexts.multiple.selected);
  });
});

describe('when in range selection mode', () => {
  const mode = 'range';
  test('should return the selection from the range context', () => {
    const result = renderHook({ mode });
    expect(result).toBe(mockedContexts.range.selected);
  });
});
