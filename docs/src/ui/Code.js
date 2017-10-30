/* global Prism */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'prismjs';
import 'prismjs/components/prism-bash';

// Do not include this because it makes LiveCode not working:
// import 'prismjs/components/prism-jsx';

export default class Code extends Component {
  static propTypes = {
    children: PropTypes.node,
    language: PropTypes.oneOf(['bash', 'jsx', 'html']),
  };
  static defaultProps = {
    language: 'jsx',
  };
  componentDidMount() {
    this.highlight();
  }
  componentDidUpdate() {
    this.highlight();
  }
  highlight() {
    Prism.highlightElement(this.node);
  }
  render() {
    return (
      <div>
        <pre>
          <code
            ref={el => (this.node = el)}
            className={`language-${this.props.language}`}
          >
            {this.props.children}
          </code>
        </pre>
      </div>
    );
  }
}
