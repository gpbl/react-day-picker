import { DayPickerClassNames, DayPickerProps } from '../DayPicker';
import { DEFAULT_PROPS } from '../DayPicker/defaults/props';
import { getCaptionProps } from './getCaptionProps';
import { CaptionHtmlProps } from './types';

describe('getCaptionProps', () => {
  it('return the container props', () => {
    const classNames: DayPickerClassNames = {
      caption: 'caption-foo'
    };
    const props: DayPickerProps = {
      ...DEFAULT_PROPS,
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
