import React from "react";

/**
 * Render the root element.
 *
 * @group Components
 * @see https://daypicker.dev/next/guides/custom-components
 */
export function Root(props: JSX.IntrinsicElements["div"]) {
  return <div {...props} />;
}

export type RootProps = Parameters<typeof Root>[0];
