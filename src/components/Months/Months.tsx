import { HTMLProps } from 'react';

/**
 * The props for the {@link Months} component.
 */
export type MonthsProps = Pick<
  HTMLProps<HTMLElement>,
  'children' | 'className' | 'style'
>;

/**
 * Component wrapping the month grids.
 */
export function Months(props: MonthsProps) {
  return <div {...props}>{props.children}</div>;
}
