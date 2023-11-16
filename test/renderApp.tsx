import { render, screen } from '@testing-library/react';
import { type ReactElement } from 'react';

/** Renders the examples into an application for easier testing. */
export function renderApp(example: ReactElement) {
  const renderResult = render(<div role="application">{example}</div>);
  return {
    dayPicker: screen.getByRole('application').firstChild,
    renderResult
  };
}
