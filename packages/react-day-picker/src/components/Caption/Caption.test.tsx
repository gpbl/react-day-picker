import React from 'react';

import { screen } from '@testing-library/react';
import { addMonths, setMonth, setYear } from 'date-fns';

import { PageObjects } from 'test/PageObjects';
import { customRender } from 'test/render';
import { freezeBeforeAll } from 'test/utils';

import { RootContext } from 'contexts/RootProvider';
import { CustomComponents, DayPickerProps } from 'types/DayPicker';

import { Caption, CaptionProps } from './Caption';

const today = new Date(2021, 8);
const po = new PageObjects(today);
const fromYear = 2020;
const toYear = 2025;

freezeBeforeAll(today);

function setup(props: CaptionProps, dayPickerProps?: DayPickerProps) {
  customRender(<Caption {...props} />, dayPickerProps);
}

describe('when navigation is disabled', () => {
  const props = { displayMonth: today };
  const context = { disableNavigation: true };
  beforeEach(() => setup(props, context));
  test('should display the caption label', () => {
    expect(po.getCaptionLabel(today)).toBeInTheDocument();
  });
  test('should not render the drop-downs', () => {
    expect(po.monthDropdown).toBeNull();
    expect(po.yearDropdown).toBeNull();
  });
  test('should not render the navigation', () => {
    expect(po.previousButton).toBeNull();
    expect(po.nextButton).toBeNull();
  });
});

describe('when using a custom CaptionLabel component', () => {
  const components: CustomComponents = {
    CaptionLabel: () => <>custom label foo</>
  };
  const props = { displayMonth: today };
  beforeEach(() => {
    setup(props, { components });
  });
  test('it should render the custom component instead', () => {
    expect(screen.getByText('custom label foo')).toBeInTheDocument();
  });
});

describe('when the caption layout is "dropdown"', () => {
  let container: HTMLElement;

  beforeEach(() => {
    const context: Partial<RootContext> = {
      captionLayout: 'dropdown',
      fromYear,
      toYear,
      classNames: { caption_dropdowns: 'foo_dropdowns' },
      styles: { caption_dropdowns: { color: 'red' } }
    };
    const result = customRender(<Caption displayMonth={today} />, context);
    container = result.container;
  });
  test('should use the `caption_dropdowns` class name', () => {
    expect(container.firstChild?.firstChild).toHaveClass('foo_dropdowns');
  });
  test('should use the `caption_dropdowns` style', () => {
    expect(container.firstChild?.firstChild).toHaveStyle({ color: 'red' });
  });
  test('should render the month drop-down', () => {
    expect(po.monthDropdown).toBeInTheDocument();
  });
  test('should render the year drop-down', () => {
    expect(po.yearDropdown).toBeInTheDocument();
  });
});

describe('when a month is selected', () => {
  let context: Partial<RootContext>;
  beforeEach(() => {
    context = {
      captionLayout: 'dropdown',
      fromYear,
      toYear,
      onMonthChange: jest.fn()
    };
    customRender(<Caption displayMonth={today} />, context);
  });
  describe('from the months drop-down', () => {
    const newMonth = setMonth(today, 0);
    beforeEach(() => po.runSelectMonth(newMonth));
    test('should call the `onMonthChange` callback', () => {
      expect(context.onMonthChange).toHaveBeenCalledWith(newMonth);
    });
  });
  describe('from the years drop-down', () => {
    const newMonth = setYear(today, 2022);
    beforeEach(() => po.runSelectYear(newMonth));
    test('should call the `onMonthChange` callback', () => {
      expect(context.onMonthChange).toHaveBeenCalledWith(newMonth);
    });
  });
});

describe('when the caption layout is "dropdown" but no date limits are set', () => {
  beforeEach(() => {
    const context: Partial<RootContext> = {
      captionLayout: 'dropdown'
    };
    customRender(<Caption displayMonth={today} />, context);
  });
  test('should not render the drop-downs', () => {
    expect(po.monthDropdown).toBeNull();
    expect(po.yearDropdown).toBeNull();
  });
});

describe('when the caption layout is "buttons"', () => {
  const context: Partial<RootContext> = {
    captionLayout: 'buttons'
  };
  test('should render the caption label', () => {
    customRender(<Caption displayMonth={today} />, context);
    expect(po.getCaptionLabel(today)).toBeInTheDocument();
  });
  test('should render the next month button', () => {
    customRender(<Caption displayMonth={today} />, context);
    expect(po.nextButton).toBeInTheDocument();
  });
  test('should render the previous month button', () => {
    customRender(<Caption displayMonth={today} />, context);
    expect(po.previousButton).toBeInTheDocument();
  });

  describe('when displaying the first of multiple months', () => {
    const numberOfMonths = 3;
    beforeEach(() => {
      customRender(<Caption displayMonth={today} />, {
        ...context,
        numberOfMonths
      });
    });
    test('should hide the next month button', () => {
      expect(po.nextButton).toBeNull();
    });
    test('should show the previous month button', () => {
      expect(po.previousButton).toBeInTheDocument();
    });
  });

  describe('when displaying the last of multiple months', () => {
    const numberOfMonths = 3;
    beforeEach(() => {
      const lastMonth = addMonths(today, numberOfMonths - 1);
      customRender(<Caption displayMonth={lastMonth} />, {
        ...context,
        numberOfMonths
      });
    });
    test('should hide the previous month button', () => {
      expect(po.previousButton).toBeNull();
    });
    test('should show the next month button', () => {
      expect(po.nextButton).toBeInTheDocument();
    });
  });

  describe('when displaying a month in the middle of multiple months', () => {
    const numberOfMonths = 3;
    beforeEach(() => {
      const lastMonth = addMonths(today, numberOfMonths - 2);
      customRender(<Caption displayMonth={lastMonth} />, {
        ...context,
        numberOfMonths
      });
    });
    test('should not render the previous month button', () => {
      expect(po.previousButton).toBeNull();
    });
    test('should not render the next month button', () => {
      expect(po.nextButton).toBeNull();
    });
  });

  describe('when clicking the previous button', () => {
    describe('and a previous month is defined', () => {
      const testContext = {
        ...context,
        onMonthChange: jest.fn()
      };
      const previousMonth = addMonths(today, -1);
      beforeEach(() => {
        customRender(<Caption displayMonth={today} />, testContext);
        po.runPreviousClick();
      });
      test('should call the `onMonthChange` callback', () => {
        expect(testContext.onMonthChange).toHaveBeenCalledWith(previousMonth);
      });
    });
    describe('and the previous month is not defined', () => {
      const testContext = {
        ...context,
        fromDate: today,
        onMonthChange: jest.fn()
      };
      beforeEach(() => {
        customRender(<Caption displayMonth={today} />, testContext);
        po.runPreviousClick();
      });
      test('should call the `onMonthChange` callback', () => {
        expect(testContext.onMonthChange).not.toHaveBeenCalled();
      });
    });
  });
  describe('when clicking the next month button', () => {
    describe('and the next month is defined', () => {
      const testContext = {
        ...context,
        onMonthChange: jest.fn()
      };
      const nextMonth = addMonths(today, 1);
      beforeEach(() => {
        customRender(<Caption displayMonth={today} />, testContext);
        po.runNextClick();
      });
      test('should call the `onMonthChange` callback', () => {
        expect(testContext.onMonthChange).toHaveBeenCalledWith(nextMonth);
      });
    });
    describe('and the next month is not defined', () => {
      const testContext = {
        ...context,
        toDate: today,
        onMonthChange: jest.fn()
      };
      beforeEach(() => {
        customRender(<Caption displayMonth={today} />, testContext);
        po.runNextClick();
      });
      test('should call the `onMonthChange` callback', () => {
        expect(testContext.onMonthChange).not.toHaveBeenCalled();
      });
    });
  });
});
