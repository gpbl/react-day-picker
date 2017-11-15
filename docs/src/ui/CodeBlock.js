import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Prism from 'prismjs';

export default class CodeBlock extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    language: PropTypes.oneOf(['bash', 'jsx', 'html', 'css']),
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
    Prism.highlightElement(this.node, false);
  }
  render() {
    const { language, children, ...props } = this.props;
    return (
      <div>
        <pre {...props}>
          <code
            ref={el => (this.node = el)}
            className={`language-${language}`}
          >{`${children.trim()}`}</code>
        </pre>
      </div>
    );
  }
}
