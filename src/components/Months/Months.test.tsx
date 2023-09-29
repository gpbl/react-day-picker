import React from 'react';

import { screen } from '@testing-library/react';
import { DayPickerProps } from 'DayPicker';

import { customRender } from 'test/render';

import { defaultClassNames } from 'contexts/DayPicker/defaultClassNames';
import { Months, MonthsProps } from './Months';

let root: HTMLDivElement;

const testStyles: Record<string, Record<string, unknown>> = {
  months: { color: 'red' }
};

const testClassNames: Record<string, string> = {
  months: 'months_container'
};

function TestChildren() {
  return (
    <>
      <div role="grid">1</div>
      <div role="grid">2</div>
    </>
  );
}

function TestEmptyChildren() {
  return null;
}
function setup(
  { children, ...props }: MonthsProps,
  dayPickerProps?: DayPickerProps
) {
  const view = customRender(
    <Months {...props}>{children}</Months>,
    dayPickerProps
  );
  root = view.container.firstChild as HTMLDivElement;
}
describe('when rendered with children', () => {
  beforeEach(() => {
    setup({
      children: <TestChildren />
    });
  });
  test('months container should have children grids', () => {
    expect(screen.getAllByRole('grid')).toHaveLength(2);
  });
});

describe('when rendered with empty children', () => {
  beforeEach(() => {
    setup({
      children: <TestEmptyChildren />
    });
  });
  test('months container should not have children grids', () => {
    expect(screen.queryAllByRole('grid')).toHaveLength(0);
  });
});

describe('when custom className and styles provided', () => {
  beforeEach(() => {
    setup(
      {
        children: <TestChildren />
      },
      {
        styles: testStyles,
        classNames: testClassNames
      }
    );
  });
  test('months container should have custom class', () => {
    expect(root).toHaveClass(testClassNames.months);
  });

  test('months container should not have default class', () => {
    expect(root).not.toHaveClass(defaultClassNames.months);
  });

  test('months container should have custom styles', () => {
    expect(root).toHaveStyle(testStyles.months);
  });
});

describe('when no custom className and styles provided', () => {
  beforeEach(() => {
    setup(
      {
        children: <TestChildren />
      },
      {
        styles: {},
        classNames: {}
      }
    );
  });
  test('months container should not have custom class', () => {
    expect(root).not.toHaveClass(testClassNames.months);
  });

  test('months container should have default class', () => {
    expect(root).toHaveClass(defaultClassNames.months);
  });

  test('months container should not have custom styles', () => {
    expect(root).not.toHaveStyle(testStyles.months);
  });
});
