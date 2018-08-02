import React from 'react';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Menu from '../ui/Menu';
import Main from '../ui/Main';
import Page from '../ui/Page';
import Wrap from '../ui/Wrap';

const contributing = require(`!raw-loader!../../../CONTRIBUTING.md`);

export default function ChangeLog() {
  return (
    <Page>
      <Helmet>
        <title>Contributing to react-day-picker docs</title>
      </Helmet>
      <Wrap>
        <Main>
          <Main.Aside>
            <Menu title="Useful links">
              <Menu.Item to="https://github.com/gpbl/react-day-picker">
                Project on GitHub
              </Menu.Item>
              <Menu.Item to="https://gitter.im/gpbl/react-day-picker">
                Gitter Room
              </Menu.Item>
            </Menu>
          </Main.Aside>
          <Main.Article>
            <ReactMarkdown>{contributing}</ReactMarkdown>
          </Main.Article>
        </Main>
      </Wrap>
    </Page>
  );
}
