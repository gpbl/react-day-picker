import React from 'react';

import userEvent from '@testing-library/user-event';
import { DayPickerProps } from 'DayPicker';

import { getNextButton, getPrevButton } from 'test/po';
import { customRender } from 'test/render';

import { Navigation, NavigationProps } from './Navigation';

let root: HTMLElement;

function setup(props: NavigationProps, dayPickerProps?: DayPickerProps) {
  const renderResult = customRender(<Navigation {...props} />, dayPickerProps);
  root = renderResult.container.firstChild as HTMLElement;
}

const props: NavigationProps = {
  previousMonth: new Date(2021, 3),
  nextMonth: new Date(2021, 5),
  displayMonth: new Date(2021, 4),
  hidePrevious: false,
  hideNext: false,
  onNextClick: jest.fn(),
  onPreviousClick: jest.fn()
};

const dayPickerProps = {
  classNames: {
    nav: 'foo'
  },
  styles: {
    nav: { color: 'red' }
  },
  components: {
    IconRight: () => <svg>IconRight</svg>,
    IconLeft: () => <svg>IconLeft</svg>
  }
};

describe('when rendered', () => {
  beforeEach(() => {
    setup(props, dayPickerProps);
  });
  test('should add the class name', () => {
    expect(root).toHaveClass(dayPickerProps.classNames.nav);
  });
  test('should apply the style', () => {
    expect(root).toHaveStyle(dayPickerProps.styles.nav);
  });
  test('the previous button should display the left icon', () => {
    const icons = root.getElementsByTagName('svg');
    expect(icons[0]).toHaveTextContent('IconLeft');
  });
  test('the next button should display the right icon', () => {
    const icons = root.getElementsByTagName('svg');
    expect(icons[1]).toHaveTextContent('IconRight');
  });
  beforeEach(() => {
    userEvent.click(getPrevButton());
  });
  test('should call "onPreviousClick"', () => {
    expect(props.onPreviousClick).toHaveBeenCalled();
  });

  describe('when clicking the next button', () => {
    beforeEach(() => {
      userEvent.click(getNextButton());
    });
    test('should call "onNextClick"', () => {
      expect(props.onNextClick).toHaveBeenCalled();
    });
  });
});

describe('when in right-to-left direction', () => {
  beforeEach(() => {
    setup(props, { ...dayPickerProps, dir: 'rtl' });
  });
  test('the previous button should display the right icon', () => {
    const icons = root.getElementsByTagName('svg');
    expect(icons[0]).toHaveTextContent('IconRight');
  });
  test('the next button should display the left icon', () => {
    const icons = root.getElementsByTagName('svg');
    expect(icons[1]).toHaveTextContent('IconLeft');
  });

  describe('when clicking the previous button', () => {
    beforeEach(() => {
      userEvent.click(getPrevButton());
    });
    test('should call "onPreviousClick"', () => {
      expect(props.onPreviousClick).toHaveBeenCalled();
    });
  });
  describe('when clicking the next button', () => {
    beforeEach(() => {
      userEvent.click(getNextButton());
    });
    test('should call "onNextClick"', () => {
      expect(props.onNextClick).toHaveBeenCalled();
    });
  });
});

describe('when the previous month is undefined', () => {
  beforeEach(() => {
    setup({ ...props, previousMonth: undefined }, dayPickerProps);
  });
  test('the previous button should be disabled', () => {
    expect(getPrevButton()).toBeDisabled();
  });
  test('the next button should be enabled', () => {
    expect(getNextButton()).toBeEnabled();
  });
});

describe('when the next month is undefined', () => {
  beforeEach(() => {
    setup({ ...props, nextMonth: undefined }, dayPickerProps);
  });
  test('the previous button should be enabled', () => {
    expect(getPrevButton()).toBeEnabled();
  });
  test('the next button should be disabled', () => {
    expect(getNextButton()).toBeDisabled();
  });
});
