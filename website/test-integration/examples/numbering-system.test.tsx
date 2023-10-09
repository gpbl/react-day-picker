import React from 'react';

import { axe } from '@site/test/axe';
import { freezeBeforeAll } from '@site/test/utils';
import { render, screen } from '@testing-library/react';

import Example from '@examples/numbering-system';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => (container = render(<Example />).container));

test('should not have AXE violations', async () => {
  expect(await axe(container)).toHaveNoViolations();
});
test('should localize the year', () => {
  expect(screen.getByText('نوفمبر ٢٬٠٢١')).toBeInTheDocument();
});
test('should localize the days', () => {
  expect(screen.getByText('أحد')).toBeInTheDocument();
});
test('should localize the week numbers', () => {
  expect(screen.getByText('٤٥')).toBeInTheDocument();
});
