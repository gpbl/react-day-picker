import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import Menu from '../ui/Menu';
import Main from '../ui/Main';
import Page from '../ui/Page';
import Wrap from '../ui/Wrap';

export default function ChangeLog() {
  return (
    <Page>
      <Helmet>
        <title>Get support – react-day-picker docs</title>
      </Helmet>
      <Wrap>
        <Main>
          <Main.Aside>
            <Menu title="Useful links">
              <Menu.Item to="https://stackoverflow.com/questions/tagged/react-day-picker?sort=newest">
                Stack Overflow
              </Menu.Item>
              <Menu.Item to="https://gitter.im/gpbl/react-day-picker">
                Gitter Room
              </Menu.Item>
              <Menu.Item to="https://github.com/gpbl/react-day-picker/issues">
                GitHub issues
              </Menu.Item>
              <Menu.Item to="https://codesandbox.io/s/XDAE3x0W8">
                CodeSandbox
              </Menu.Item>
            </Menu>
          </Main.Aside>
          <Main.Article>
            <h1>Ways to get support</h1>
            <blockquote>
              <h3>Help us to understand your problem</h3>
              <p>
                If you can‘t get react-day-picker working right for you,{' '}
                <strong>
                  please reproduce your problem using{' '}
                  <a href="https://codesandbox.io/s/XDAE3x0W8">
                    this CodeSandbox
                  </a>
                </strong>: change the code, save it and use the URL to share it.
              </p>
            </blockquote>

            <h3>Search for existing issues</h3>
            <ul>
              <li>
                Search the questions{' '}
                <a href="https://stackoverflow.com/questions/tagged/react-day-picker?sort=newest">
                  tagged <code>react-day-picker</code>
                </a>{' '}
                on Stack Overflow
              </li>
              <li>
                Give a look to the open or closed{' '}
                <a href="https://github.com/gpbl/react-day-picker/issues?utf8=%E2%9C%93&q=">
                  issues on GitHub
                </a>
              </li>
            </ul>

            <h3>Submit your issue</h3>
            <ul>
              <li>
                <a href="https://stackoverflow.com/questions/ask">
                  Ask on Stack Overflow
                </a>{' '}
                and tag your question with <code>react-day-picker</code>
              </li>
              <li>
                It’s super ok to{' '}
                <a href="https://github.com/gpbl/react-day-picker/issues/new">
                  open issues on GitHub
                </a>{' '}
                as well, even better if you want to{' '}
                <Link to="/contribute">contribute</Link>!
              </li>
            </ul>

            <h3>Chat with other developers</h3>
            <p>
              In <a href="">our Gitter room</a> you may find other developers
              online to talk directly with.
            </p>
          </Main.Article>
        </Main>
      </Wrap>
    </Page>
  );
}
