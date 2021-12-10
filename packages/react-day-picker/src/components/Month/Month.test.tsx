import React from 'react';

import { DayPickerProps } from 'types/DayPicker';

import { customRender } from 'test/render';

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
  caption_between: { fontSize: 20 }
};

const testClassNames: Record<string, string> = {
  caption_start: 'caption_start',
  caption_end: 'caption_end',
  caption_between: 'caption_between'
};

type Test = {
  monthProps: MonthProps;
  dayPickerProps: DayPickerProps;
  expected: string[];
  notExpected: string[];
};

describe('when dir is ltr', () => {
  const testLtr: Test[] = [
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
      expected: ['caption_start', 'caption_end'],
      notExpected: ['caption_between']
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
      expected: ['caption_start'],
      notExpected: ['caption_between', 'caption_end']
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
      expected: ['caption_end'],
      notExpected: ['caption_start', 'caption_between']
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
      expected: ['caption_between'],
      notExpected: ['caption_start', 'caption_end']
    }
  ];

  describe.each(testLtr)(
    'when displayIndex is $monthProps.displayIndex and numberOfMonths is $dayPickerProps.numberOfMonths',
    ({ monthProps, dayPickerProps, expected, notExpected }) => {
      beforeEach(() => {
        setup(monthProps, dayPickerProps);
      });
      test.each(expected)(`the root should have the %s class`, (name) =>
        expect(root).toHaveClass(testClassNames[name])
      );
      test.each(expected)(`the root should have the %s style`, (name) =>
        expect(root).toHaveStyle(testStyles[name])
      );
      test.each(notExpected)(`the root should not have the %s class`, (name) =>
        expect(root).not.toHaveClass(testClassNames[name])
      );
    }
  );
});

describe('when dir is rtl', () => {
  const testRtl: Test[] = [
    {
      monthProps: {
        displayIndex: 0,
        displayMonth
      },
      dayPickerProps: {
        dir: 'rtl',
        numberOfMonths: 1,
        styles: testStyles,
        classNames: testClassNames
      },
      expected: ['caption_start', 'caption_end'],
      notExpected: ['caption_between']
    },
    {
      monthProps: {
        displayIndex: 0,
        displayMonth
      },
      dayPickerProps: {
        dir: 'rtl',
        numberOfMonths: 2,
        styles: testStyles,
        classNames: testClassNames
      },
      expected: ['caption_end'],
      notExpected: ['caption_between', 'caption_start']
    },
    {
      monthProps: {
        displayIndex: 1,
        displayMonth
      },
      dayPickerProps: {
        dir: 'rtl',
        numberOfMonths: 2,
        styles: testStyles,
        classNames: testClassNames
      },
      expected: ['caption_start'],
      notExpected: ['caption_end', 'caption_between']
    },
    {
      monthProps: {
        displayIndex: 1,
        displayMonth
      },
      dayPickerProps: {
        dir: 'rtl',
        numberOfMonths: 3,
        styles: testStyles,
        classNames: testClassNames
      },
      expected: ['caption_between'],
      notExpected: ['caption_start', 'caption_end']
    }
  ];

  describe.each(testRtl)(
    'when displayIndex is $monthProps.displayIndex and numberOfMonths is $dayPickerProps.numberOfMonths',
    ({ monthProps, dayPickerProps, expected, notExpected }) => {
      beforeEach(() => {
        setup(monthProps, dayPickerProps);
      });
      test.each(expected)(`the root should have the %s class`, (name) =>
        expect(root).toHaveClass(testClassNames[name])
      );
      test.each(expected)(`the root should have the %s style`, (name) =>
        expect(root).toHaveStyle(testStyles[name])
      );
      test.each(notExpected)(`the root should not have the %s class`, (name) =>
        expect(root).not.toHaveClass(testClassNames[name])
      );
    }
  );
});
