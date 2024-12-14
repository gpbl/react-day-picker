import React, { type HTMLAttributes } from "react";

/**
 * Render the root element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Root(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} />;
}

export type RootProps = Parameters<typeof Root>[0];
