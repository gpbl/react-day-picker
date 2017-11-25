import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import DayPicker from 'react-day-picker';

import Menu from '../ui/Menu';
import Main from '../ui/Main';
import Page from '../ui/Page';
import Wrap from '../ui/Wrap';

export default function DocPage({ title, children }) {
  return (
    <Page>
      <Helmet>
        <title>{title} – react-day-picker docs</title>
      </Helmet>
      <Wrap>
        <Main>
          <Main.Aside>
            <Menu title="Documentation">
              <Menu.Item to="/docs/getting-started">Get Started</Menu.Item>
              <Menu.Item to="/docs/basic-concepts">Basic concepts</Menu.Item>
              <Menu.Item to="/docs/matching-days">Matching days</Menu.Item>
              <Menu.Item to="/docs/styling">Styling</Menu.Item>
              <Menu.Item to="/docs/localization">Localization</Menu.Item>
              <Menu.Item to="/docs/input">DayPickerInput</Menu.Item>
            </Menu>
            <Menu title="API">
              <Menu.Item to="/api/DayPicker">DayPicker</Menu.Item>
              <Menu.Item to="/api/DayPickerInput">DayPickerInput</Menu.Item>
              <Menu.Item to="/api/DateUtils">DateUtils</Menu.Item>
              <Menu.Item to="/api/LocaleUtils">LocaleUtils</Menu.Item>
              <Menu.Item to="/api/ModifiersUtils">ModifiersUtils</Menu.Item>
            </Menu>
            <Menu subtitle={`version ${DayPicker.VERSION}`}>
              <Menu.Item to="/changelog">Changelog</Menu.Item>
            </Menu>
          </Main.Aside>
          <Main.Article>
            <h1>{title}</h1>
            {children}
          </Main.Article>
        </Main>
      </Wrap>
    </Page>
  );
}

DocPage.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};
