import { DayPickerProps } from '../../types/DayPicker';

interface PreparedCaption {
  containerProps: { className?: string; style?: React.CSSProperties };
}

export function prepareCaption(props: DayPickerProps): PreparedCaption {
  const { styles, classNames } = props;
  return {
    containerProps: {
      className: classNames.caption,
      style: styles.caption,
    },
  };
}
