import { DayPickerClassNames, DayPickerProps } from '../DayPicker';
import { DefaultProps } from '../DayPicker/defaults/DefaultProps';
import { getCaptionProps } from './getCaptionProps';
import { CaptionHtmlProps } from './types';

describe('getCaptionProps', () => {
  it('return the container props', () => {
    const classNames: DayPickerClassNames = {
      caption: 'caption-foo'
    };
    const props: DayPickerProps = {
      ...DefaultProps,
      classNames
    };
    const expected: CaptionHtmlProps = {
      containerProps: {
        className: 'caption-foo'
      }
    };
    const result = getCaptionProps(props);
    expect(result).toMatchObject(expected);
  });
});
