import React from 'react';
import { css } from 'glamor';

import * as colors from '../constants/color';
import { WIDE_SCREEN } from '../constants/mediaSelector';

import logo from '../images/logo.png';

import Wrap from './Wrap';
import Navigation from './Navigation';

export const HEADER_HEIGHT = 60;
export const LOGO_HEIGHT = 50;
export const LOGO_WIDTH = 250;

const cssHeader = css({
  width: '100%',
  borderBottom: `1px solid ${colors.BORDER}`,
  backgroundColor: 'white',
  textAlign: 'center',
  [WIDE_SCREEN]: {
    position: 'fixed',
    // marginBottom: HEADER_HEIGHT,
    height: HEADER_HEIGHT,
    zIndex: 1,
    top: 0,
    padding: '5px 10px',
    boxSizing: 'border-box',
    textAlign: 'left',
    '& + *': {
      paddingTop: HEADER_HEIGHT,
    },
  },
});

const cssHome = css({
  verticalAlign: 'middle',
  display: 'inline-block',
  marginRight: '1em',
});

export default function Header() {
  return (
    <header css={cssHeader}>
      <Wrap>
        <a href="/" css={cssHome}>
          <img
            src={logo}
            alt="Home page"
            height={LOGO_HEIGHT}
            width={LOGO_WIDTH}
          />
        </a>
        <Navigation />
      </Wrap>
    </header>
  );
}
