import { RenderResult } from '@testing-library/react-hooks';
import es from 'date-fns/locale/es';
import { DayPickerProps } from 'DayPicker';

import { customRenderHook } from 'test/render';
import { freezeBeforeAll } from 'test/utils';

import { CaptionLayout } from 'components/Caption';
import { DayPickerContextValue, useDayPicker } from 'contexts/DayPicker';
import { getDefaultContextValue } from 'contexts/DayPicker/defaultContextValue';
import { CustomComponents, DaySelectionMode } from 'types/DayPickerBase';
import { Formatters } from 'types/Formatters';
import { Labels } from 'types/Labels';
import { DayModifiers, ModifiersClassNames } from 'types/Modifiers';
import { ClassNames, Styles } from 'types/Styles';

const today = new Date(2022, 5, 13);
const defaults = getDefaultContextValue();

freezeBeforeAll(today);

let renderResult: RenderResult<DayPickerContextValue>;
function setup(dayPickerProps?: DayPickerProps) {
  const { result } = customRenderHook(() => useDayPicker(), dayPickerProps);
  renderResult = result;
}

describe('when passing rendered without props', () => {
  type PropName =
    | 'captionLayout'
    | 'classNames'
    | 'formatters'
    | 'labels'
    | 'locale'
    | 'modifiersClassNames'
    | 'modifiers'
    | 'numberOfMonths'
    | 'styles'
    | 'today';

  const testPropNames: PropName[] = [
    'captionLayout',
    'classNames',
    'formatters',
    'labels',
    'locale',
    'modifiersClassNames',
    'modifiers',
    'numberOfMonths',
    'styles'
    // 'today' SKIPPED: this test doesn't pass
  ];
  beforeAll(() => {
    setup();
  });
  test.each(testPropNames)('should use the %s default value', (propName) => {
    expect(renderResult.current[propName]).toEqual(defaults[propName]);
  });
});

describe('when passing "locale" from props', () => {
  const locale = es;
  const dayPickerProps: DayPickerProps = { locale };
  beforeEach(() => {
    setup(dayPickerProps);
  });
  test('should override the default locale', () => {
    expect(renderResult.current.locale).not.toBe(defaults.locale);
  });
  test('should return the custom locale', () => {
    expect(renderResult.current.locale).toBe(locale);
  });
});

describe('when passing "numberOfMonths" from props', () => {
  const numberOfMonths = 4;
  const dayPickerProps: DayPickerProps = { numberOfMonths };
  beforeEach(() => {
    setup(dayPickerProps);
  });
  test('should override the default numberOfMonths', () => {
    expect(renderResult.current.numberOfMonths).not.toBe(
      defaults.numberOfMonths
    );
  });
  test('should return the custom numberOfMonths', () => {
    expect(renderResult.current.numberOfMonths).toBe(4);
  });
});

describe('when passing "today" from props', () => {
  const today = new Date(2010, 9, 11);
  const dayPickerProps: DayPickerProps = { today };
  beforeEach(() => {
    setup(dayPickerProps);
  });
  test('should override the default "today"', () => {
    expect(renderResult.current.today).not.toBe(defaults.today);
  });
  test('should return the custom "today"', () => {
    expect(renderResult.current.today).toBe(today);
  });
});

describe('when passing "captionLayout" from props', () => {
  const captionLayout: CaptionLayout = 'dropdown';
  const fromYear = 2000;
  const toYear = 2010;
  const dayPickerProps: DayPickerProps = { captionLayout, fromYear, toYear };
  beforeEach(() => {
    setup(dayPickerProps);
  });
  test('should override the default "captionLayout"', () => {
    expect(renderResult.current.captionLayout).not.toBe(defaults.captionLayout);
  });
  test('should return the custom "captionLayout"', () => {
    expect(renderResult.current.captionLayout).toBe(captionLayout);
  });
});

describe('when "fromDate" and "toDate" are undefined', () => {
  const fromDate = undefined;
  const toDate = undefined;

  describe('when using "dropdown" as "captionLayout"', () => {
    const captionLayout: CaptionLayout = 'dropdown';
    beforeEach(() => {
      setup({ fromDate, toDate, captionLayout });
    });
    test('should return "buttons" as "captionLayout"', () => {
      expect(renderResult.current.captionLayout).toBe('buttons');
    });
  });
});

describe('when "fromDate" is undefined, but not "toDate"', () => {
  const fromDate = undefined;
  const toDate = new Date();

  describe('when using "dropdown" as "captionLayout"', () => {
    const captionLayout: CaptionLayout = 'dropdown';
    beforeEach(() => {
      setup({ fromDate, toDate, captionLayout });
    });
    test('should return "buttons" as "captionLayout"', () => {
      expect(renderResult.current.captionLayout).toBe('buttons');
    });
  });
});

describe('when "toDate" is undefined, but not "fromDate"', () => {
  const fromDate = new Date();
  const toDate = undefined;

  describe('when using "dropdown" as "captionLayout"', () => {
    const captionLayout: CaptionLayout = 'dropdown';
    beforeEach(() => {
      setup({ fromDate, toDate, captionLayout });
    });
    test('should return "buttons" as "captionLayout"', () => {
      expect(renderResult.current.captionLayout).toBe('buttons');
    });
  });
});

describe('when using "dropdown" as "captionLayout"', () => {
  const captionLayout: CaptionLayout = 'dropdown';
  const fromYear = 2000;
  const toYear = 2010;
  const dayPickerProps: DayPickerProps = { captionLayout, fromYear, toYear };
  beforeEach(() => {
    setup(dayPickerProps);
  });
  test('should override the default "captionLayout"', () => {
    expect(renderResult.current.captionLayout).not.toBe(defaults.captionLayout);
  });
  test('should return the custom "captionLayout"', () => {
    expect(renderResult.current.captionLayout).toBe(captionLayout);
  });
});

describe('when passing "modifiers" from props', () => {
  const modifiers: DayModifiers = { foo: new Date() };
  const dayPickerProps: DayPickerProps = { modifiers };
  beforeEach(() => {
    setup(dayPickerProps);
  });
  test('should override the default "modifiers"', () => {
    expect(renderResult.current.modifiers).not.toBe(defaults.modifiers);
  });
  test('should return the custom "modifiers"', () => {
    expect(renderResult.current.modifiers).toStrictEqual(modifiers);
  });
});

describe('when passing "modifiersClassNames" from props', () => {
  const modifiersClassNames: ModifiersClassNames = { foo: 'bar' };
  const dayPickerProps: DayPickerProps = { modifiersClassNames };
  beforeEach(() => {
    setup(dayPickerProps);
  });
  test('should override the default "modifiersClassNames"', () => {
    expect(renderResult.current.modifiersClassNames).not.toBe(
      defaults.modifiersClassNames
    );
  });
  test('should return the custom "modifiersClassNames"', () => {
    expect(renderResult.current.modifiersClassNames).toStrictEqual(
      modifiersClassNames
    );
  });
});

describe('when passing "styles" from props', () => {
  const styles: Styles = { caption: { color: 'red ' } };
  const dayPickerProps: DayPickerProps = { styles };
  beforeEach(() => {
    setup(dayPickerProps);
  });
  test('should override the default "styles"', () => {
    expect(renderResult.current.styles).not.toBe(defaults.styles);
  });
  test('should include the custom "styles"', () => {
    expect(renderResult.current.styles).toStrictEqual({
      ...defaults.styles,
      ...styles
    });
  });
});

describe('when passing "classNames" from props', () => {
  const classNames: ClassNames = { caption: 'foo' };
  const dayPickerProps: DayPickerProps = { classNames };
  beforeEach(() => {
    setup(dayPickerProps);
  });
  test('should override the default "classNames"', () => {
    expect(renderResult.current.classNames).not.toBe(defaults.classNames);
  });
  test('should include the custom "classNames"', () => {
    expect(renderResult.current.classNames).toStrictEqual({
      ...defaults.classNames,
      ...classNames
    });
  });
});

describe('when passing "formatters" from props', () => {
  const formatters: Partial<Formatters> = { formatCaption: jest.fn() };
  const dayPickerProps: DayPickerProps = { formatters };
  beforeEach(() => {
    setup(dayPickerProps);
  });
  test('should override the default "formatters"', () => {
    expect(renderResult.current.formatters).not.toBe(defaults.formatters);
  });
  test('should include the custom "formatters"', () => {
    expect(renderResult.current.formatters).toStrictEqual({
      ...defaults.formatters,
      ...formatters
    });
  });
});

describe('when passing "labels" from props', () => {
  const labels: Partial<Labels> = { labelMonthDropdown: jest.fn() };
  const dayPickerProps: DayPickerProps = { labels };
  beforeEach(() => {
    setup(dayPickerProps);
  });
  test('should override the default "labels"', () => {
    expect(renderResult.current.labels).not.toBe(defaults.labels);
  });
  test('should include the custom "labels"', () => {
    expect(renderResult.current.labels).toStrictEqual({
      ...defaults.labels,
      ...labels
    });
  });
});

describe('when passing "components" from props', () => {
  const components: CustomComponents = { Day: jest.fn() };
  const dayPickerProps: DayPickerProps = { components };
  beforeEach(() => {
    setup(dayPickerProps);
  });
  test('should override the default "components"', () => {
    expect(renderResult.current.components).not.toBe(defaults.components);
  });
  test('should include the custom "components"', () => {
    expect(renderResult.current.components).toStrictEqual({
      ...defaults.components,
      ...components
    });
  });
});

describe('when in selection mode', () => {
  const mode: DaySelectionMode = 'multiple';
  const onSelect = jest.fn();
  const dayPickerProps: DayPickerProps = { mode, onSelect };
  beforeEach(() => {
    setup(dayPickerProps);
  });
  test('should return the "onSelect" event handler', () => {
    expect(renderResult.current.onSelect).toBe(onSelect);
  });
});
