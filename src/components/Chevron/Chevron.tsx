export interface ChevronProps {
  size?: number;
  orientation?: 'up' | 'down' | 'left' | 'right';
}
export function Chevron(props: ChevronProps) {
  const { size = 24, orientation } = props;
  const style = {
    transform: `rotate(${
      orientation === 'up'
        ? 90
        : orientation === 'right'
        ? 180
        : orientation === 'down'
        ? 270
        : 0
    }deg)`
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
      <polygon points="15 17.23 9.43 11.5 15 5.76 13.28 4 6 11.5 13.28 19" />
    </svg>
  );
}
