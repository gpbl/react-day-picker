import React, { type Ref, type HTMLAttributes } from "react";

/**
 * Render the root element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Root(
  props: {
    /** Ref for root element used when `animate` is `true`. */
    rootRef?: Ref<HTMLDivElement>;
  } & HTMLAttributes<HTMLDivElement>
) {
  const { rootRef, ...rest } = props;
  return <div {...rest} ref={rootRef} />;
}

export type RootProps = Parameters<typeof Root>[0];
