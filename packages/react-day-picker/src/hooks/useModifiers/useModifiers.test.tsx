import { customRenderHook } from '@test/customRenderHook';
import { addDays } from 'date-fns';
import tk from 'timekeeper';

import { useModifiers } from './useModifiers';

const today = new Date(2021, 8);

beforeEach(() => tk.freeze(today));
afterEach(() => tk.reset());

describe('when mode="range" and selected includes the current date', () => {
  const { result } = customRenderHook(() => useModifiers(today), {
    mode: 'range',
    selected: { from: today, to: today }
  });
  test('useModifiers should return the selected modifier as true', () => {
    expect(result.current.modifiers.selected).toBeTruthy();
  });
});
describe('when mode="range" and selected is undefined', () => {
  const { result } = customRenderHook(() => useModifiers(today), {
    mode: 'range'
  });
  test('useModifiers should return the selected modifier as false', () => {
    expect(result.current.modifiers.selected).toBeFalsy();
  });
});
describe('when mode="range" and selected does not span the current date', () => {
  const tomorrow = addDays(today, 1);
  const { result } = customRenderHook(() => useModifiers(today), {
    mode: 'range'
    // selected: { from: tomorrow, to: tomorrow }
  });
  test('useModifiers should return the selected modifier as false', () => {
    expect(result.current.modifiers.selected).toBeFalsy();
  });
});
