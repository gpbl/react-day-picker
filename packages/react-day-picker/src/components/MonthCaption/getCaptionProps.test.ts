import { getCaptionProps } from './getCaptionProps';
import { defaultProps } from '../DayPicker/defaults/defaultProps';
import { CaptionHtmlProps } from './types';
import { DayPickerClassNames, DayPickerProps } from '../DayPicker';

describe('getCaptionProps', () => {
  it('return the container props', () => {
    const classNames: DayPickerClassNames = {
      caption: 'caption-foo'
    };
    const props: DayPickerProps = {
      ...defaultProps,
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
