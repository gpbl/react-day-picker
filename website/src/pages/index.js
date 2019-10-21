/* eslint-disable import/no-unresolved */
import * as React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Frame from '../components/Frame';

import { DayPicker } from 'react-day-picker';

const features = [
  {
    title: <>A date picker for React</>,
    description: (
      <>DayPicker Easily add a date picker to your React application </>
    ),
  },
  {
    title: <>Localizable</>,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Extensible API</>,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
];

function Home() {
  const context = useDocusaurusContext();
  return (
    <Layout
      title="DayPicker – flexible date picker component for React"
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames('hero', styles.header)}>
        <div className="container">
          <h1 className="hero__title">{`<DayPicker/>`}</h1>
          <h2 className={classnames('hero__subtitle', styles.subtitle)}>
            The flexible, customizable date picker for React.
          </h2>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--lg',
                styles.getStarted
              )}
              to={'docs/intro'}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({ imageUrl, title, description }, idx) => (
                  <div
                    key={idx}
                    className={classnames('col col--4', styles.feature)}
                  >
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
