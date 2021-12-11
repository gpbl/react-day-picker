import React from 'react';

import tk from 'timekeeper';

import { PageObjects } from 'test/po/PageObjects';
import { customRender } from 'test/render';

import { CaptionLabel } from './CaptionLabel';

const today = new Date(1979, 8);
const po = new PageObjects(today);

beforeEach(() => tk.freeze(today));
afterEach(() => tk.reset());

test('should render the formatted display month', () => {
  customRender(<CaptionLabel id="1" displayMonth={today} />);
  expect(po.getCaptionLabel(today)).toBeInTheDocument();
});

test('should apply the `caption_label` class name', () => {
  customRender(<CaptionLabel id="1" displayMonth={today} />, {
    classNames: { caption_label: 'foo' }
  });
  expect(po.getCaptionLabel(today)).toHaveClass('foo');
});

test('should apply the `caption_label` style', () => {
  customRender(<CaptionLabel id="1" displayMonth={today} />, {
    styles: { caption_label: { color: 'red' } }
  });
  expect(po.getCaptionLabel(today)).toHaveStyle({ color: 'red' });
});
