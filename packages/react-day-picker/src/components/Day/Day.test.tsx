import React from 'react';
import { es, enUS } from 'date-fns/locale';
import { Day } from './Day';
import { customRender } from '../../test';
import { DayPickerProps } from '../../types';

const renderNovember182021 = (contextValue: DayPickerProps) => {
  return customRender(
    <Day displayMonth={new Date(2021, 10)} date={new Date(2021, 10, 18)} />,
    contextValue
  );
};

describe('when the locale is enUS', () => {
  const locale = enUS;
  test('the day should have aria text content in english', () => {
    const { container } = renderNovember182021({
      locale
    });
    expect(container).toHaveTextContent('18th November (Thursday)');
  });
});
describe('when the locale is es', () => {
  const locale = es;
  test('the day should have aria text content in spanish', () => {
    const { container } = renderNovember182021({
      locale
    });
    expect(container).toHaveTextContent('18º noviembre (jueves)');
  });
});

describe('when matches the `hidden` modifier', () => {
  test.todo('should not render anything');
});

describe('when outside the display month', () => {
  describe('if the outside days are hidden', () => {
    test.todo('should not render anything');
  });
  describe('if the outside days are visible', () => {
    test.todo('should apply the `day_outside` class name`');
    test.todo('should apply the `day_outside` style');
    test.todo('should render the day content in a `div` element');
  });
});

describe('when the day is not selectable', () => {
  test.todo('should render the day content in a `div` element');
});

describe('when the day is disabled', () => {
  test.todo('should render a disabled button');
  test.todo('should render a not focusable button');
});

describe('when the day is focused', () => {
  test.todo('should render a not focusable button');
});

describe('when selection mode is not controlled', () => {
  test.todo('should render a `div` element');
});

describe('when the day is not selectable', () => {
  test.todo('should render a `div` element');
});

describe('when the day is selectable', () => {
  test.todo('should render a `button` element');
  test.todo('should apply the `day` class name');

  test.todo('should apply the `day` style');
  test.todo('should be focusable');
  test.todo('should attach the `onDayClick` event handler');
  test.todo('should attach the `onDayFocus` event handler');
  test.todo('should attach the `onDayBlur` event handler');
  test.todo('should attach the `onDayKeyDown` event handler');
  test.todo('should attach the `onDayKeyUp` event handler');
  test.todo('should attach the `onDayMouseEnter` event handler');
  test.todo('should attach the `onDayMouseLeave` event handler');
  test.todo('should attach the `onDayTouchCancel` event handler');
  test.todo('should attach the `onDayTouchEnd` event handler');
  test.todo('should attach the `onDayTouchMove` event handler');
  test.todo('should attach the `onDayTouchStart` event handler');

  describe('and matches a modifier', () => {
    test.todo('should apply the modifier class names');
    test.todo('should apply the modifier style');
  });

  describe('and is clicked', () => {
    test.todo('should have the `aria-pressed` attribute');
    test.todo('should have the `selected` class name');
    test.todo('should have the `selected` style');
  });

  describe('and is focused', () => {
    test.todo('should be the focused day');
    test.todo('should not be focusable again');
    describe('and then blurred', () => {
      test.todo('should not be the focused day anymore');
    });
  });
});
