import { RenderResult } from '@testing-library/react-hooks';

import { customRenderHook } from 'test/render';
import { freezeBeforeAll } from 'test/utils';

import { DayPickerContextValue, useDayPicker } from 'contexts/DayPicker';
import { DayPickerProps } from 'types/DayPicker';

const today = new Date(2022, 5, 13);

freezeBeforeAll(today);

let renderResult: RenderResult<DayPickerContextValue>;

function setup(dayPickerProps?: DayPickerProps) {
  const { result } = customRenderHook(() => useDayPicker(), dayPickerProps);
  renderResult = result;
}

describe('when rendered', () => {
  beforeEach(() => {
    setup();
  });
  test.todo('the div should include the default class name');
  test.todo('the button should include the default class name');
  test.todo('the div should include the default style');
  test.todo('the button should include the default style');
  test.todo('the button should not have "aria-pressed"');
  test.todo('the button should have -1 as "tabIndex"');
  test.todo('the button should have the event handlers attached');
  test.todo('should return the days modifiers status');
});

describe('when "modifierPrefix" is passed in', () => {
  test.todo('should use the modifier prefix in the div class name');
  test.todo('should use the modifier prefix in the button class name');
});

describe('when not in selection mode', () => {
  test.todo('should be a div');
});
describe('when "onDayClick" is not passed in', () => {
  test.todo('should be a div');
});
describe('when in selection mode', () => {
  test.todo('should be a button');
});
describe('when "onDayClick" is passed in', () => {
  test.todo('should be a button');
});

describe('when showing the outside days', () => {
  describe('when the day is outside', () => {
    test.todo('should be hidden');
  });
});

describe('when the day has the "hidden" modifier active', () => {
  test.todo('should be hidden');
});

describe('when "modifiersStyles" is passed in', () => {
  test.todo('the div props should include the modifiers style');
  test.todo('the button props should include the modifiers style');
});
describe('when "styles.day" is passed in', () => {
  test.todo('the div props should include the style');
  test.todo('the button props should include the style');
});
describe('when "modifiersClassNames" is passed in', () => {
  test.todo('the div props should include the modifiers classNames');
  test.todo('the button props should include the modifiers classNames');
});
describe('when "classNames.day" is passed in', () => {
  test.todo('the div props should include the style');
  test.todo('the button props should include the style');
});

describe('when the day is not target of focus', () => {
  test.todo('the button should have tabIndex 0');
});

describe('when the day is disabled', () => {
  test.todo('the button should be disabled');
});

describe('when the day is selected', () => {
  test.todo('the button should have "aria-pressed"');
});
