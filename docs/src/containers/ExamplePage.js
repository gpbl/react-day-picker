import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Page from '../ui/Page';
import Main from '../ui/Main';
import Menu from '../ui/Menu';
import Wrap from '../ui/Wrap';

export default function ExamplePage({ children, title }) {
  return (
    <Page>
      <Helmet>
        <title>{title} – react-day-picker examples</title>
      </Helmet>
      <Wrap>
        <Main>
          <Main.Aside>
            <Menu title="Examples">
              <Menu.Item to="/examples/basic">Simple calendar</Menu.Item>
              <Menu.Item to="/examples/input">Simple input field</Menu.Item>
            </Menu>
            <Menu subtitle="Customization">
              <Menu.Item to="/examples/customization-outside">
                Outside days
              </Menu.Item>
              <Menu.Item to="/examples/customization-week-numbers">
                Week numbers
              </Menu.Item>
              <Menu.Item to="/examples/customization-fixed-weeks">
                Fixed weeks
              </Menu.Item>
              <Menu.Item to="/examples/customization-today-button">
                Today button
              </Menu.Item>
            </Menu>
            <Menu subtitle="Rendering months">
              <Menu.Item to="/examples/months-initial">
                Change the initial month
              </Menu.Item>
              <Menu.Item to="/examples/months-prevent">
                Prevent months navigation
              </Menu.Item>
              <Menu.Item to="/examples/months-restrict">
                Restrict months navigation
              </Menu.Item>
              <Menu.Item to="/examples/months-multiple">
                Multiple months
              </Menu.Item>
              <Menu.Item to="/examples/months-paged">
                Paged navigation
              </Menu.Item>
              <Menu.Item to="/examples/months-reverse">
                Reverse navigation
              </Menu.Item>
            </Menu>
            <Menu subtitle="Selecting days">
              <Menu.Item to="/examples/selected">
                Display days as selected
              </Menu.Item>
              <Menu.Item to="/examples/selected-state">
                Selected day in state
              </Menu.Item>
              <Menu.Item to="/examples/selected-multiple">
                Select multiple days
              </Menu.Item>
              <Menu.Item to="/examples/selected-range">
                Select range on click
              </Menu.Item>
              <Menu.Item to="/examples/selected-range-enter">
                Select range on mouse enter
              </Menu.Item>
              <Menu.Item to="/examples/selected-week">
                Selecting an entire week
              </Menu.Item>
            </Menu>
            <Menu subtitle="Disabling days">
              <Menu.Item to="/examples/disabled">
                Display days as disabled
              </Menu.Item>
              <Menu.Item to="/examples/disabled-weekends">
                Disable weekends
              </Menu.Item>
              <Menu.Item to="/examples/disabled-interaction">
                Interaction with disabled days
              </Menu.Item>
            </Menu>
            <Menu subtitle="Input field">
              <Menu.Item to="/examples/input-state">
                Using input with state
              </Menu.Item>
              <Menu.Item to="/examples/input-custom-overlay">
                Customize the overlay
              </Menu.Item>
              <Menu.Item to="/examples/input-moment">
                Using moment.js to parse and format dates
              </Menu.Item>
              <Menu.Item to="/examples/input-date-fns">
                Using date-fns to parse and format dates
              </Menu.Item>
              <Menu.Item to="/examples/input-from-to">
                Range with two inputs
              </Menu.Item>
            </Menu>
            <Menu subtitle="Matching days">
              <Menu.Item to="/examples/modifiers">
                Add CSS modifiers to day cells
              </Menu.Item>
              <Menu.Item to="/examples/modifiers-styles">
                Inline style day cells
              </Menu.Item>
            </Menu>
            <Menu subtitle="Localization">
              <Menu.Item to="/examples/localization">Localization</Menu.Item>
              <Menu.Item to="/examples/localization-moment">
                Localization with moment.js
              </Menu.Item>
            </Menu>
            <Menu subtitle="Customizing elements">
              <Menu.Item to="/examples/elements-year-navigation">
                Switch between years and months
              </Menu.Item>
              <Menu.Item to="/examples/elements-cell">
                Add content to day cells
              </Menu.Item>
              <Menu.Item to="/examples/elements-navbar">
                Navbar and weekdays
              </Menu.Item>
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

ExamplePage.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
