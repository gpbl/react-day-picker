import { DayPickerProps } from 'DayPicker';

import { renderDayPickerHook } from 'test/render';

import { useModifiers } from 'contexts/Modifiers';
import { DayModifiers, InternalModifier, Modifiers } from 'types/Modifiers';

const internalModifiers = Object.values(InternalModifier);

function renderHook(dayPickerProps: Partial<DayPickerProps> = {}) {
  return renderDayPickerHook<Modifiers>(useModifiers, dayPickerProps);
}

describe('when rendered with custom modifiers', () => {
  const modifier = new Date(2018, 11, 12);
  const dayModifiers: DayModifiers = {
    foo: modifier,
    today: modifier,
    outside: modifier,
    disabled: modifier,
    selected: modifier,
    hidden: modifier,
    range_start: modifier,
    range_end: modifier,
    range_middle: modifier
  };
  let result: Modifiers;
  beforeEach(() => {
    result = renderHook({ modifiers: dayModifiers });
  });
  test('should return the custom modifiers', () => {
    expect(result.foo).toEqual([dayModifiers.foo]);
  });
  test.each(internalModifiers)(
    'should override the %s internal modifier',
    (internalModifier) => {
      expect(result[internalModifier]).toEqual([
        dayModifiers[internalModifier]
      ]);
    }
  );
});
