import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'prismjs';

import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-diff';
import 'prismjs/plugins/line-highlight/prism-line-highlight';

import '../style/main.scss';

import favicon from '../images/favicon.png';

import Header from './Header';

const DESCRIPTION =
  'A flexible date picker component for React, with no dependencies, fully customizable, localizable and with ARIA support.';

export default function Page({ children, title }) {
  const htmlTitle = `react-day-picker - ${title}`;
  return (
    <div>
      <Helmet>
        <title>{htmlTitle}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="React Component, Date Picker, react-datepicker, react-day-picker"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
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
        <link rel="shortcut icon" href={favicon} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-68185118-1"
        />
        <script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-68185118-1');
  `}
        </script>
      </Helmet>
      <Header />
      {children}
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
