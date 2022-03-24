import { RenderResult } from '@testing-library/react-hooks';

import { customRenderHook } from 'test/render';

import { useModifiers } from 'contexts/Modifiers';
import { DayPickerBase } from 'types/DayPickerBase';
import { DayModifiers, InternalModifier, Modifiers } from 'types/Modifiers';

let renderResult: RenderResult<Modifiers>;

function setup(dayPickerProps: DayPickerBase) {
  const { result } = customRenderHook(() => useModifiers(), dayPickerProps);
  renderResult = result;
}

const internalModifiers = Object.values(InternalModifier);

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
  beforeEach(() => {
    setup({ modifiers: dayModifiers });
  });

  test('should return the custom modifiers', () => {
    expect(renderResult.current.foo).toEqual([dayModifiers.foo]);
  });
  test.each(internalModifiers)(
    'should override the %s internal modifier',
    (internalModifier) => {
      expect(renderResult.current[internalModifier]).toEqual([
        dayModifiers[internalModifier]
      ]);
    }
  );
});
