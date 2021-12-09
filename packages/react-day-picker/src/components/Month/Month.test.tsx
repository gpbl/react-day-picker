import React from 'react';

import { customRender } from '@test/render';

import { DayPickerProps } from '../..';
import { Month, MonthProps } from './Month';

let root: HTMLDivElement;
function setup(props: MonthProps, dayPickerProps: DayPickerProps) {
  const renderResult = customRender(<Month {...props} />, dayPickerProps);
  root = renderResult.container.firstChild as HTMLDivElement;
}

const displayMonth = new Date(2022, 10, 4);

const testStyles: Record<string, any> = {
  caption_start: { color: 'red' },
  caption_end: { background: 'blue' },
  caption_center: { fontSize: 19 }
};

const testClassNames: Record<string, string> = {
  caption_start: 'caption_start',
  caption_end: 'caption_end',
  caption_center: 'caption_center'
};

type Test = {
  monthProps: MonthProps;
  dayPickerProps: DayPickerProps;
  expectedElements: string[];
  notExpectedElements: string[];
};

const tests: Test[] = [
  {
    monthProps: {
      displayIndex: 0,
      displayMonth
    },
    dayPickerProps: {
      numberOfMonths: 1,
      styles: testStyles,
      classNames: testClassNames
    },
    expectedElements: ['caption_start', 'caption_end'],
    notExpectedElements: ['caption_center']
  },
  {
    monthProps: {
      displayIndex: 0,
      displayMonth
    },
    dayPickerProps: {
      numberOfMonths: 2,
      styles: testStyles,
      classNames: testClassNames
    },
    expectedElements: ['caption_start'],
    notExpectedElements: ['caption_center', 'caption_end']
  },
  {
    monthProps: {
      displayIndex: 1,
      displayMonth
    },
    dayPickerProps: {
      numberOfMonths: 2,
      styles: testStyles,
      classNames: testClassNames
    },
    expectedElements: ['caption_end'],
    notExpectedElements: ['caption_start', 'caption_center']
  },
  {
    monthProps: {
      displayIndex: 1,
      displayMonth
    },
    dayPickerProps: {
      numberOfMonths: 3,
      styles: testStyles,
      classNames: testClassNames
    },
    expectedElements: ['caption_center'],
    notExpectedElements: ['caption_start', 'caption_end']
  }
];

describe.each(tests)(
  'when displayIndex is $monthProps.displayIndex and numberOfMonths is $dayPickerProps.numberOfMonths',
  ({ monthProps, dayPickerProps, expectedElements, notExpectedElements }) => {
    beforeEach(() => {
      setup(monthProps, dayPickerProps);
    });
    test.each(expectedElements)(
      `the root element should have the %s class`,
      (element) => {
        expect(root).toHaveClass(testClassNames[element]);
      }
    );
    test.each(expectedElements)(
      `the root element should have the %s style`,
      (element) => {
        expect(root).toHaveStyle(testStyles[element]);
      }
    );
    test.each(notExpectedElements)(
      `the root element should not have the %s class`,
      (element) => {
        expect(root).not.toHaveClass(testClassNames[element]);
      }
    );
    test.skip.each(notExpectedElements)(
      `the root element should not have the %s style`,
      (element) => {
        expect(root).not.toHaveStyle(testStyles[element]);
      }
    );
  }
);
