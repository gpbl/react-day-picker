import { RenderResult } from '@testing-library/react-hooks';
import { addMonths } from 'date-fns';

import { customRenderHook } from 'test/render';

import { ActiveModifiers } from 'types/Modifiers';

import { useActiveModifiers } from './useActiveModifiers';

const date = new Date(2010, 5, 23);

let renderResult: RenderResult<ActiveModifiers>;
function setup(day: Date, displayMonth?: Date) {
  const view = customRenderHook(() => useActiveModifiers(day, displayMonth));
  renderResult = view.result;
}

describe('when in the same month', () => {
  const displayMonth = date;
  beforeEach(() => {
    setup(date, displayMonth);
  });
  test('should return the active modifiers', () => {
    expect(renderResult.current).toBeDefined();
  });
});

describe('when not in the same display month', () => {
  const displayMonth = addMonths(date, 1);
  beforeEach(() => {
    setup(date, displayMonth);
  });
  test('should return the outside modifier', () => {
    expect(renderResult.current.outside).toBe(true);
  });
});
