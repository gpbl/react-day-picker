/* eslint-env jest */
import { getCaptionProps } from './getCaptionProps';
import { CaptionHtmlProps } from '../../typings/react-day-picker';
import { defaultProps } from '../defaultProps';

describe('getCaptionProps', () => {
  it('return the container props', () => {
    const props = {
      ...defaultProps,
      styles: { caption: { color: 'red' } },
      classNames: { caption: 'caption-foo' },
    };
    const expected: CaptionHtmlProps = {
      containerProps: {
        className: 'caption-foo',
        style: { color: 'red' },
      },
    };
    const result = getCaptionProps(props);
    expect(result).toMatchObject(expected);
  });
});
