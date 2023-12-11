export interface ChevronProps {
  size?: number;
  orientation?: 'up' | 'down' | 'left' | 'right';
}
export function Chevron(props: ChevronProps) {
  const { size = 24, orientation } = props;
  const style = {
    transform:
      orientation === 'up'
        ? 'rotate(90deg)'
        : orientation === 'right'
          ? 'rotate(180deg)'
          : orientation === 'down'
            ? 'rotate(270deg)'
            : undefined
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
      <polygon points="15 17.23 9.43 11.5 15 5.76 13.28 4 6 11.5 13.28 19" />
    </svg>
  );
}
