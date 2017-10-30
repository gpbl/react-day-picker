import React from 'react';

import GithubButton from '../ui/GithubButton';
import Grid from '../ui/Grid';
import GridColumn from '../ui/GridColumn';
import Wrap from '../ui/Wrap';

import * as colors from '../constants/color';
import { WIDE_SCREEN } from '../constants/mediaSelector';
import logo from '../images/logo.png';

export default function Footer() {
  return (
    <footer
      css={{
        marginTop: '2em',
        paddingTop: '1em',
        paddingBottom: '1em',
        backgroundColor: colors.BACKGROUND,
        '& li, & p': {
          fontSize: '0.75rem',
        },
        '& h4': {
          textTransform: 'uppercase',
          fontWeight: 'normal',
          fontSize: '0.875rem',
          marginTop: '0.5em',
        },
        [WIDE_SCREEN]: {},
      }}
    >
      <Wrap>
        <Grid>
          <GridColumn span={2}>
            <div>
              <a href="/">
                <img src={logo} alt="Home page" height={40} />
              </a>
            </div>
            <p>
              Created by <a href="https://github.com/gpbl">gpbl</a> and{' '}
              <a href="https://github.com/gpbl/react-day-picker/graphs/contributors">
                contributors
              </a>.
            </p>
            <p>
              Licensed under the{' '}
              <a href="https://github.com/gpbl/react-day-picker/blob/master/LICENSE">
                MIT License
              </a>.
            </p>
            <GithubButton />
          </GridColumn>
          <GridColumn span={2}>
            <h4>
              <span role="img" aria-label="Thumb up">
                👍🏽
              </span>{' '}
              Get support
            </h4>

            <p>
              Ask on{' '}
              <a href="http://stackoverflow.com/questions/tagged/react-day-picker?sort=newest">
                Stack Overflow
              </a>{' '}
              (tag with <code>react-day-picker</code>) or join the{' '}
              <a href="https://gitter.im/gpbl/react-day-picker">
                Gitter room
              </a>{' '}
              to talk with other developers
            </p>

            <p>
              Please fork{' '}
              <a href="https://codesandbox.io/s/XDAE3x0W8">
                this codesandbox
              </a>{' '}
              to reproduce your issue.
            </p>
          </GridColumn>

          <GridColumn span={2}>
            <h4>
              <span role="img" aria-label="Love">
                ❤️
              </span>{' '}
              Contribute
            </h4>
            <p>
              File bugs and feature requests in the{' '}
              <a href="https://github.com/gpbl/react-day-picker/issues">
                issues page
              </a>. Fork the{' '}
              <a href="https://github.com/gpbl/react-day-picker">
                GitHub repo
              </a>{' '}
              to open a nice PR.
            </p>
          </GridColumn>
        </Grid>
      </Wrap>
    </footer>
  );
}
