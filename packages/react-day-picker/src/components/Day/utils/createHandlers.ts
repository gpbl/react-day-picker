import { DayPickerContextValue } from '../../../hooks';
import { ModifierStatus } from '../../../types';

export function createHandlers(
  date: Date,
  modifierStatus: ModifierStatus,
  context: DayPickerContextValue
): {
  onKeyUp: React.KeyboardEventHandler;
  onMouseEnter: React.MouseEventHandler;
  onMouseLeave: React.MouseEventHandler;
  onTouchCancel: React.TouchEventHandler;
  onTouchEnd: React.TouchEventHandler;
  onTouchMove: React.TouchEventHandler;
  onTouchStart: React.TouchEventHandler;
} {
  const onKeyUp: React.KeyboardEventHandler = (e) => {
    context.onDayKeyUp?.(date, modifierStatus, e);
  };
  const onMouseEnter: React.MouseEventHandler = (e) => {
    context.onDayMouseEnter?.(date, modifierStatus, e);
  };
  const onMouseLeave: React.MouseEventHandler = (e) => {
    context.onDayMouseLeave?.(date, modifierStatus, e);
  };
  const onTouchCancel: React.TouchEventHandler = (e) => {
    context.onDayTouchCancel?.(date, modifierStatus, e);
  };
  const onTouchEnd: React.TouchEventHandler = (e) => {
    context.onDayTouchEnd?.(date, modifierStatus, e);
  };
  const onTouchMove: React.TouchEventHandler = (e) => {
    context.onDayTouchMove?.(date, modifierStatus, e);
  };
  const onTouchStart: React.TouchEventHandler = (e) => {
    context.onDayTouchStart?.(date, modifierStatus, e);
  };
  return {
    onKeyUp,
    onMouseEnter,
    onMouseLeave,
    onTouchCancel,
    onTouchEnd,
    onTouchMove,
    onTouchStart
  };
}
