import { HTMLProps } from 'react';

/**
 * The props for the `Footer` component.
 */
export type FooterProps = Pick<
  HTMLProps<HTMLElement>,
  'children' | 'className' | 'style'
>;

/**
 * Component wrapping the footer.
 */
export function Footer(props: FooterProps) {
  return <div {...props}>{props.children}</div>;
}
