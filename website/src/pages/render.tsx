/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { useLocation } from '@docusaurus/router';
import BrowserOnly from '@docusaurus/BrowserOnly';

/**
 * Create a page at `/render` URL that renders the examples from the examples
 * `directory`.
 *
 * This page is embedded in an iframe by the `CodeBlock` component.
 *
 * For instance, `/render?component="MyComponentExample.tsx"`  will render the
 * component exported by `/examples/MyComponentExample.tsx`.
 *
 * Example components must export a function named `Example` to work properly:
 *
 * ```
 * // MyComponentExample.tsx
 * export function Example() {
 *  return <MyComponent />
 * }
 * ```
 * */
export default function Render(): JSX.Element {
  const location = useLocation();
  return (
    <BrowserOnly>
      {() => {
        const params = new URLSearchParams(location.search);
        const component = params.get('component');
        try {
          require(`../../examples/${component}`).Example;
        } catch (e) {
          console.error('Error requiring %s', `../../examples/${component}`, e);
          return <pre>{e.message}</pre>;
        }
        const Component = require(`../../examples/${component}`).Example;

        return (
          <div className="Render">
            <Component />
          </div>
        );
      }}
    </BrowserOnly>
  );
}
