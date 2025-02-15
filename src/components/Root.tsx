import React, { type HTMLAttributes } from "react";

/**
 * Render the root element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export const Root = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  return <div {...props} ref={ref} />;
});

Root.displayName = "Root";

export type RootProps = Parameters<typeof Root>[0];
