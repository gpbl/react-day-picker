import React from 'react';
import DayPicker from 'react-day-picker';
import { css } from 'glamor';

import githubLogo from '../images/github.png';
import { WIDE_SCREEN } from '../constants/mediaSelector';

const cssNav = css({
  display: 'flex',
  verticalAlign: 'middle',
  textTransform: 'uppercase',
  paddingBottom: '.5em',
  [WIDE_SCREEN]: {
    display: 'inline-flex',
    width: `calc(100% - 271px)`,
    paddingBottom: 0,
  },
  '& > ul': {
    width: '100%',
    display: 'inline-flex',
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  '& > ul > li': {
    padding: '0 .4rem',
    display: 'inline-block',
    ':first-child': {
      paddingLeft: 0,
    },
    ':last-child': {
      flex: '1 0 0',
      textAlign: 'right',
    },
    [WIDE_SCREEN]: {
      padding: '0 1rem',
    },
  },
});

const cssGithubLink = css({
  backgroundImage: `url(${githubLogo})`,
  backgroundSize: '18px',
  backgroundRepeat: 'no-repeat',
  paddingLeft: 24,
});

export default function Navigation() {
  return (
    <nav css={cssNav}>
      <ul>
        <li>
          <a href="/docs">Docs</a>
        </li>
        <li>
          <a href="/examples">Examples</a>
        </li>
        <li>
          <a href="/docs/api.html">API</a>
        </li>
        <li>
          <a href="/changelog.html">v{DayPicker.VERSION}</a>
        </li>
        <li>
          <a
            css={cssGithubLink}
            href="https://github.com/gpbl/react-day-picker"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
}
