import React from 'react';

import Link from 'gatsby-link';

import Page from '../ui/Page';
import Footer from '../ui/Footer';
import Wrap from '../ui/Wrap';
import LinkButton from '../ui/LinkButton';
import GitHubButton from '../ui/GitHubButton';
import CodeBlock from '../ui/CodeBlock';

import styles from './index.module.scss';

import FeatureModifiers from '../code-samples/examples/modifiers-styles';
import FeatureInput from '../code-samples/examples/input';
import FeatureInput2 from '../code-samples/examples/input-from-to';
import FeatureLocalization from '../code-samples/examples/localization';
import FeatureRange from '../code-samples/examples/selected-range';

import imgLogo from '../images/logo-icon.png';

export default function HomePage() {
  return (
    <Page>
      <div className={styles.hero}>
        <Wrap>
          <img
            alt="react-day-picker Logo"
            src={imgLogo}
            width={100}
            height={110}
          />
          <h1>react-day-picker</h1>
          <h2>
            Date picker component for{' '}
            <a href="https://facebook.github.io/react/">React</a>
          </h2>
          <p>
            Flexible, highly customizable, localizable, with ARIA support, no
            external dependencies,{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://bundlephobia.com/result?p=react-day-picker"
            >
              7.4kB gzipped
            </a>
            .
          </p>
          <p>
            <LinkButton to="/docs">Read the docs</LinkButton>
            <LinkButton to="/examples">Browse the examples</LinkButton>
          </p>
          <GitHubButton />
        </Wrap>
      </div>
      <Wrap>
        <div className={styles.features}>
          <div>
            <h3>Style days with modifiers</h3>
            <p>
              Define the disabled or selected days and change the aspect of each
              day cell with <Link to="/docs/matching-days">modifiers</Link>.
            </p>
            <div className={styles.feature}>
              <FeatureModifiers />
            </div>
          </div>
          <div>
            <h3>Works with input fields</h3>
            <p>
              Display the date picker in an overlay using the{' '}
              <Link to="/docs/input">DayPickerInput</Link> component.
            </p>
            <div className={styles.feature}>
              <FeatureInput />
              <p>...or choose a range of days:</p>
              <FeatureInput2 />
            </div>
          </div>
          <div>
            <h3>Localizable</h3>
            <p>
              Use your own translation strings or import those from moment.js,
              if you use it.
            </p>
            <div className={styles.feature}>
              <FeatureLocalization />
            </div>
          </div>
          <div>
            <h3>Select range of days</h3>
            <p>
              Specify which days should be selected in your component’s state (
              <Link to="/examples/selected-range">source</Link>
              ).
            </p>
            <div className={styles.feature}>
              <FeatureRange numberOfMonths={1} />
            </div>
          </div>
        </div>
        <hr />
        <h2>Get started</h2>
        <div className={styles.gettingStarted}>
          <div>
            <h3>Install via npm or yarn</h3>
          </div>
          <div span={2}>
            <CodeBlock language="bash">
              {`$ npm install react-day-picker --save
# or with yarn:
$ yarn add react-day-picker`}
            </CodeBlock>
            <div>
              <a href="https://www.npmjs.com/package/react-day-picker">
                <img
                  src="https://img.shields.io/npm/v/react-day-picker.svg?style=flat-square"
                  alt="npm version"
                />
              </a>{' '}
              <a href="http://npm-stat.com/charts.html?package=react-day-picker">
                <img
                  src="https://img.shields.io/npm/dm/react-day-picker.svg?style=flat-square"
                  alt="npm downloads"
                />
              </a>{' '}
              <a href="https://circleci.com/gh/gpbl/react-day-picker">
                <img
                  src="https://img.shields.io/circleci/project/github/gpbl/react-day-picker/master.svg?style=flat-square"
                  alt="circleci"
                />
              </a>{' '}
              <a href="https://codecov.io/gh/gpbl/react-day-picker">
                <img
                  src="https://img.shields.io/codecov/c/github/gpbl/react-day-picker/master.svg?style=flat-square"
                  alt="npm downloads"
                />
              </a>
            </div>
          </div>
          <div>
            <h3>Import in your component</h3>
          </div>
          <div span={2}>
            <CodeBlock>{`import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default function Hello() {
  return <DayPicker />;
}
`}</CodeBlock>
          </div>
        </div>
      </Wrap>
      <Footer />
    </Page>
  );
}
