import React from 'react';

import { render, screen } from '@testing-library/react';
import tk from 'timekeeper';

import Example from './localization-spanish';
import { getMonthCaption } from '@site/src/test';

let container: HTMLElement;

beforeEach(() => {
  const renderResult = render(<Example />);
  container = renderResult.container;
});

describe('when displaying November 2021', () => {
  const today = new Date(2021, 10, 25);
  beforeAll(() => tk.freeze(today));
  afterAll(() => tk.reset());
  test('should localize the caption in Spanish', () => {
    expect(getMonthCaption(container)).toHaveTextContent('noviembre 2021');
  });
});
