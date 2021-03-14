import { RenderResult } from '@testing-library/react';
import React from 'react';

import { customRender } from 'test';
import tk from 'timekeeper';

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
