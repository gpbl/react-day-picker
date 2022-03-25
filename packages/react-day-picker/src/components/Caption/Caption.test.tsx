import React from 'react';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { addMonths, setMonth, setYear } from 'date-fns';
import { DayPickerProps } from 'DayPicker';

import {
  getMonthCaption,
  getMonthDropdown,
  getNextButton,
  getPrevButton,
  getYearDropdown,
  queryMonthDropdown,
  queryNextButton,
  queryPrevButton,
  queryYearDropdown
} from 'test/po';
import { customRender } from 'test/render';
import { freezeBeforeAll } from 'test/utils';

import { CustomComponents } from 'types/DayPickerBase';

import { Caption, CaptionProps } from './Caption';

const today = new Date(2021, 8);
const fromYear = 2020;
const toYear = 2025;

freezeBeforeAll(today);

function setup(props: CaptionProps, dayPickerProps?: DayPickerProps) {
  customRender(<Caption {...props} />, dayPickerProps);
}

describe('when navigation is disabled', () => {
  const props = { displayMonth: today };
  const dayPickerProps = { disableNavigation: true };
  beforeEach(() => setup(props, dayPickerProps));
  test('should display the caption label', () => {
    expect(getMonthCaption()).toHaveTextContent('September 2021');
  });
  test('should not render the navigation', () => {
    expect(queryPrevButton()).toBeNull();
    expect(queryNextButton()).toBeNull();
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
    const dayPickerProps: DayPickerProps = {
      captionLayout: 'dropdown',
      fromYear,
      toYear,
      classNames: { caption_dropdowns: 'foo_dropdowns' },
      styles: { caption_dropdowns: { color: 'red' } }
    };
    const result = customRender(
      <Caption displayMonth={today} />,
      dayPickerProps
    );
    container = result.container;
  });
  test('should use the `caption_dropdowns` class name', () => {
    expect(container.firstChild?.firstChild).toHaveClass('foo_dropdowns');
  });
  test('should use the `caption_dropdowns` style', () => {
    expect(container.firstChild?.firstChild).toHaveStyle({ color: 'red' });
  });
  test('should render the month drop-down', () => {
    expect(getMonthDropdown()).toBeInTheDocument();
  });
  test('should render the year drop-down', () => {
    expect(getYearDropdown()).toBeInTheDocument();
  });
});

describe('when a month is selected', () => {
  const dayPickerProps: DayPickerProps = {
    captionLayout: 'dropdown',
    fromYear,
    toYear,
    onMonthChange: jest.fn()
  };
  beforeEach(() => {
    customRender(<Caption displayMonth={today} />, dayPickerProps);
  });
  describe('from the months drop-down', () => {
    const newMonth = setMonth(today, 0);
    beforeEach(() => {
      userEvent.selectOptions(
        getMonthDropdown(),
        newMonth.getMonth().toString()
      );
    });
    test('should call the `onMonthChange` callback', () => {
      expect(dayPickerProps.onMonthChange).toHaveBeenCalledWith(newMonth);
    });
  });
  describe('from the years drop-down', () => {
    const newYear = setYear(today, 2022);
    beforeEach(() => {
      userEvent.selectOptions(
        getYearDropdown(),
        newYear.getFullYear().toString()
      );
    });
    test('should call the `onMonthChange` callback', () => {
      expect(dayPickerProps.onMonthChange).toHaveBeenCalledWith(newYear);
    });
  });
});

describe('when the caption layout is "dropdown" but no date limits are set', () => {
  const dayPickerProps: DayPickerProps = {
    captionLayout: 'dropdown'
  };
  beforeEach(() => {
    customRender(<Caption displayMonth={today} />, dayPickerProps);
  });
  test('should not render the drop-downs', () => {
    expect(queryMonthDropdown()).toBeNull();
    expect(queryYearDropdown()).toBeNull();
  });
});

describe('when the caption layout is "buttons"', () => {
  const dayPickerProps: DayPickerProps = {
    captionLayout: 'buttons'
  };
  test('should render the caption label', () => {
    customRender(<Caption displayMonth={today} />, dayPickerProps);
    expect(getMonthCaption()).toHaveTextContent('September 2021');
  });
  test('should render the next month button', () => {
    customRender(<Caption displayMonth={today} />, dayPickerProps);
    expect(getNextButton()).toBeInTheDocument();
  });
  test('should render the previous month button', () => {
    customRender(<Caption displayMonth={today} />, dayPickerProps);
    expect(getPrevButton()).toBeInTheDocument();
  });

  describe('when displaying the first of multiple months', () => {
    const numberOfMonths = 3;
    beforeEach(() => {
      customRender(<Caption displayMonth={today} />, {
        ...dayPickerProps,
        numberOfMonths
      });
    });
    test('should not display the next month button', () => {
      expect(queryNextButton()).toBeNull();
    });
    test('should show the previous month button', () => {
      expect(getPrevButton()).toBeInTheDocument();
    });
  });

  describe('when displaying the last of multiple months', () => {
    const numberOfMonths = 3;
    beforeEach(() => {
      const lastMonth = addMonths(today, numberOfMonths - 1);
      customRender(<Caption displayMonth={lastMonth} />, {
        ...dayPickerProps,
        numberOfMonths
      });
    });
    test('should hide the previous month button', () => {
      expect(queryPrevButton()).toBeNull();
    });
    test('should show the next month button', () => {
      expect(getNextButton()).toBeInTheDocument();
    });
  });

  describe('when displaying a month in the middle of multiple months', () => {
    const numberOfMonths = 3;
    beforeEach(() => {
      const lastMonth = addMonths(today, numberOfMonths - 2);
      customRender(<Caption displayMonth={lastMonth} />, {
        ...dayPickerProps,
        numberOfMonths
      });
    });
    test('should not render the previous month button', () => {
      expect(queryPrevButton()).toBeNull();
    });
    test('should not render the next month button', () => {
      expect(queryNextButton()).toBeNull();
    });
  });

  describe('when clicking the previous button', () => {
    describe('and a previous month is defined', () => {
      const testContext = {
        ...dayPickerProps,
        onMonthChange: jest.fn()
      };
      const previousMonth = addMonths(today, -1);
      beforeEach(() => {
        customRender(<Caption displayMonth={today} />, testContext);
        userEvent.click(getPrevButton());
      });
      test('should call the `onMonthChange` callback', () => {
        expect(testContext.onMonthChange).toHaveBeenCalledWith(previousMonth);
      });
    });
    describe('and the previous month is not defined', () => {
      const testContext = {
        ...dayPickerProps,
        fromDate: today,
        onMonthChange: jest.fn()
      };
      beforeEach(() => {
        customRender(<Caption displayMonth={today} />, testContext);
        userEvent.click(getPrevButton());
      });
      test('should call the `onMonthChange` callback', () => {
        expect(testContext.onMonthChange).not.toHaveBeenCalled();
      });
    });
  });

  describe('when clicking the next month button', () => {
    describe('and the next month is defined', () => {
      const testContext = {
        ...dayPickerProps,
        onMonthChange: jest.fn()
      };
      const nextMonth = addMonths(today, 1);
      beforeEach(() => {
        customRender(<Caption displayMonth={today} />, testContext);
        userEvent.click(getNextButton());
      });
      test('should call the `onMonthChange` callback', () => {
        expect(testContext.onMonthChange).toHaveBeenCalledWith(nextMonth);
      });
    });
    describe('and the next month is not defined', () => {
      const testContext = {
        ...dayPickerProps,
        toDate: today,
        onMonthChange: jest.fn()
      };
      beforeEach(() => {
        customRender(<Caption displayMonth={today} />, testContext);
        userEvent.click(getNextButton());
      });
      test('should call the `onMonthChange` callback', () => {
        expect(testContext.onMonthChange).not.toHaveBeenCalled();
      });
    });
  });
});
