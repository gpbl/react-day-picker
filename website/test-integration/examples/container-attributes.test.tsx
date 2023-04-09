import React from 'react';

import { axe } from '@site/test/axe';
import { render } from '@testing-library/react';

import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/container-attributes';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let firstChild: HTMLDivElement;
beforeEach(
  () =>
    (firstChild = render(<Example />).container.firstChild as HTMLDivElement)
);

test('should not have AXE violations', async () => {
  expect(await axe(firstChild)).toHaveNoViolations();
});

test('should have the specified id', () => {
  expect(firstChild.id).toBe('testId');
});

test('should have the DataSet attribute', () => {
  expect(firstChild).toHaveAttribute('data-test', 'testData');
});

test('should have the ARIA attribute', () => {
  expect(firstChild).toHaveAttribute('aria-label', 'test');
});
