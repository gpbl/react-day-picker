import React from 'react';
import PropTypes from 'prop-types';

import styles from './Main.module.scss';

export default function Main({ children }) {
  return <main className={styles.main}>{children}</main>;
}

Main.propTypes = {
  children: PropTypes.node,
};

function Aside({ children }) {
  return (
    <aside className={styles.aside}>
      <div>{children}</div>
    </aside>
  );
}

Aside.propTypes = {
  children: PropTypes.node,
};

function Article({ children }) {
  return <article className={styles.article}>{children}</article>;
}

Article.propTypes = {
  children: PropTypes.node,
};

Main.Aside = Aside;
Main.Article = Article;
