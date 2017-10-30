import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../ui/globalStyle';

import Header from './Header';
import Footer from './Footer';

const DESCRIPTION =
  'A flexible date picker component for React, with no dependencies, fully customizable, localizable and with ARIA support.';

export default function Page({ children, title }) {
  const htmlTitle = `react-day-picker - ${title}`;
  return (
    <div css={{ background: 'white' }}>
      <Helmet>
        <title>{htmlTitle}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="React Component, Date Picker, react-datepicker, react-day-picker"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={htmlTitle} />
        <meta
          property="og:url"
          content="http://react-day-picker.js.org/index.html"
        />
        <meta
          property="og:image"
          content="http://react-day-picker.js.org/images/og-image.png"
        />
        <meta property="og:description" content={DESCRIPTION} />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,500i"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Inconsolata"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Page.defaultProps = {
  title: 'Flexible date picker component for React',
};
