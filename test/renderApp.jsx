import { render, screen } from '@testing-library/react';
/** Renders the examples into an application for easier testing. */
export function renderApp(example) {
    const renderResult = render(<div role="application">{example}</div>);
    return {
        dayPicker: screen.getByRole('application').firstChild,
        renderResult
    };
}
