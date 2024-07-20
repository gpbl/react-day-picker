import React from "react";

/**
 * Component wrapping the footer.
 *
 * @group Components
 * @see https://daypicker.dev/next/guides/custom-components
 */
export function Footer(props: JSX.IntrinsicElements["div"]) {
  return <div {...props} />;
}

export type FooterProps = Parameters<typeof Footer>[0];
