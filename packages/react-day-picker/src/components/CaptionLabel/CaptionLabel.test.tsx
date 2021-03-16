import React from 'react';

import { RenderResult } from '@testing-library/react';
import tk from 'timekeeper';

import { customRender } from 'test';

import { CaptionLabel } from './CaptionLabel';
import { CaptionLabelProps } from './CaptionLabelProps';

const FrozenDate = new Date(2020, 5);

beforeEach(() => tk.freeze(FrozenDate));
afterEach(() => tk.reset());

const setup = (props?: CaptionLabelProps): RenderResult => {
  return customRender(<CaptionLabel displayMonth={new Date()} {...props} />);
};
test('should render correctly', () => {
  const { container } = setup();
  expect(container.firstChild).toMatchSnapshot();
});
