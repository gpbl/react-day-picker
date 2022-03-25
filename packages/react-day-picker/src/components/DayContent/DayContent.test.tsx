import React from 'react';

import es from 'date-fns/locale/es';
import { DayPickerProps } from 'DayPicker';

import { customRender } from 'test/render';
import { freezeBeforeAll } from 'test/utils';

import { DayContent, DayContentProps } from 'components/DayContent';
import { defaultClassNames } from 'contexts/DayPicker/defaultClassNames';

const today = new Date(2021, 8);

freezeBeforeAll(today);
let container: HTMLElement;
function setup(props: DayContentProps, dayPickerProps?: DayPickerProps) {
  const result = customRender(<DayContent {...props} />, dayPickerProps);
  container = result.container;
}

const date = today;
const displayMonth = today;
const props: DayContentProps = {
  date: date,
  displayMonth,
  activeModifiers: {}
};

const dayPickerProps: DayPickerProps = {
  locale: es
};

describe('when rendered', () => {
  beforeEach(() => {
    setup(props, dayPickerProps);
  });
  test('the first element is an aria-hidden element with the formatted day', () => {
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
  });
  test('the first element contains the formatted day', () => {
    expect(container.firstChild).toHaveTextContent('1');
  });
  test('the second element is visually hidden', () => {
    expect(container.childNodes[1]).toHaveClass(defaultClassNames.vhidden);
  });
  test('the second element contains the formatted day', () => {
    expect(container.childNodes[1]).toHaveTextContent(
      '1º septiembre (miércoles)'
    );
  });
});
