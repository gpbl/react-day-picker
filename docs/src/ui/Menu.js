/* global window */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import scrollIntoView from 'scroll-into-view';

import styles from './Menu.module.scss';

export default class Menu extends React.Component {
  componentDidMount() {
    const activeNode = this.node.querySelector(`.${styles.itemActive}`);
    if (activeNode) {
      scrollIntoView(activeNode, {
        time: 0,
        validTarget: target => target !== window,
      });
    }
  }
  render() {
    const { children, title, subtitle } = this.props;
    return (
      <div className={styles.menu} ref={el => (this.node = el)}>
        {title && <h3>{title}</h3>}
        {subtitle && <h4>{subtitle}</h4>}
        <ul>{children}</ul>
      </div>
    );
  }
}

Menu.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  children: PropTypes.node,
};

function Item({ children, to }) {
  return (
    <li className={styles.item}>
      {to.search('http') > -1 ? (
        <a href={to} target="_blank">
          {children}
        </a>
      ) : (
        <Link to={to} activeClassName={styles.itemActive}>
          {children}
        </Link>
      )}
    </li>
  );
}

Item.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

Menu.Item = Item;
