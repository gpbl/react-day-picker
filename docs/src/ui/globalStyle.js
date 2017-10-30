import { insertGlobal } from 'glamor';
import 'react-day-picker/lib/style.css';

import '../css/prism.css';

import * as colors from '../constants/color';

const FONT_FAMILY =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const FONT_MONO = [
  'Inconsolata',
  'SFMono-Regular',
  'Menlo',
  'Consolas',
  'Monaco',
  'Andale Mono',
  'Ubuntu Mono',
  'monospace',
].join(',');

insertGlobal('html', { background: colors.BACKGROUND, margin: 0, padding: 0 });
insertGlobal('body', {
  fontSize: 14,
  fontFamily: FONT_FAMILY,
  margin: 0,
  padding: 0,
  overflowX: 'hidden',
});

insertGlobal('h1, h2, h3, h4', {
  margin: '1em 0',
});

insertGlobal('h1', {
  fontWeight: 300,
  fontSize: '1.75rem',
});

insertGlobal('h2', {
  fontWeight: 500,
  fontSize: '1.5rem',
});

insertGlobal('h3, h4', {
  fontWeight: 500,
  fontSize: '1rem',
});

insertGlobal('p, ul, ol', {
  lineHeight: '1.5em',
});

insertGlobal('a', {
  color: colors.LINK,
  textDecoration: 'none',
  '&:hover': {
    color: 'red',
  },
});

insertGlobal('a:hover', {
  color: colors.LINK_HOVER,
});

insertGlobal('strong, b', {
  fontWeight: 500,
});

insertGlobal('code, pre', {
  fontFamily: FONT_MONO,
  background: colors.BACKGROUND,
  'h1 &, h2 &, h3 &, h4 &, p &, ul &, td &': {
    padding: '.1em .3em',
    fontSize: 13,
    display: 'inline-block',
  },
});

insertGlobal('blockquote', {
  borderLeft: `4px solid ${colors.QUOTE_BORDER}`,
  marginLeft: 0,
  marginRight: 0,
  padding: '.1em',
  background: colors.QUOTE_BACKGROUND,
});

insertGlobal('hr', {
  margin: '.5em 0',
  height: 0,
  border: 0,
  borderBottom: `1px solid ${colors.BORDER}`,
});

insertGlobal('input', {
  WebkitAppearance: 'none',
  padding: '.5rem 1rem',
  border: '1px solid #DCE0E0',
  color: '#565A5C',
  fontSize: 14,
  fontFamily: FONT_FAMILY,
  textAlign: 'center',
  fontWeight: 400,
});

insertGlobal('select', {
  fontFamily: FONT_FAMILY,
  fontWeight: 400,
});
