import { render, RenderResult } from '@testing-library/react';
import * as React from 'react';

import { ContextProvider } from 'contexts';
import { IconDropdown } from './IconDropdown';

let icon: Element;
let result: RenderResult;
describe('when rendered without props', () => {
  beforeEach(() => {
    result = render(
      <ContextProvider>
        <IconDropdown />
      </ContextProvider>
    );
    icon = result.container.children[0];
  });
  test('should render a svg element', () => {
    expect(icon.tagName).toBe('svg');
  });
});

describe('when using a class name from props', () => {
  beforeEach(() => {
    result = render(
      <ContextProvider>
        <IconDropdown className="foo" />
      </ContextProvider>
    );
    icon = result.container.children[0];
  });
  test('should add the class name', () => {
    expect(icon).toHaveClass('foo');
  });
});

describe('when using a style from props', () => {
  beforeEach(() => {
    result = render(
      <ContextProvider>
        <IconDropdown style={{ color: 'red' }} />
      </ContextProvider>
    );
    icon = result.container.children[0];
  });
  test('should apply the style', () => {
    expect(icon).toHaveStyle({ color: 'red' });
  });
});
