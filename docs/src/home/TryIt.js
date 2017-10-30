/* eslint-disable global-require, import/no-unresolved, import/no-webpack-loader-syntax */

import React, { Component } from 'react';
import LiveCode from '../ui/LiveCode';

import { BORDER, BACKGROUND } from '../constants/color';

import examplesGroups from '../examples';

class TryIt extends Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.state = {
      example: examplesGroups[0].examples[0],
    };
  }
  handleSelectChange(e) {
    const group = e.target.value.split(',')[0];
    const example = e.target.value.split(',')[1];
    this.setState({
      example: examplesGroups[group].examples[example],
    });
  }
  handleExampleClick(example) {
    return e => {
      e.preventDefault();
      this.setState({ example });
    };
  }
  render() {
    return (
      <div css={{ display: 'flex' }}>
        <div
          css={{
            marginRight: '1em',
            padding: '0 .5em',
            borderRight: `1px solid ${BORDER}`,
          }}
        >
          {examplesGroups.map(group => (
            <div>
              <p>{group.title}</p>
              <ul
                css={{ fontSize: 12, listStyle: 'none', margin: 0, padding: 0 }}
              >
                {group.examples.map((example, j) => (
                  <li css={{ margin: 0, padding: 0 }}>
                    <a href="#" onClick={this.handleExampleClick(example)}>
                      {example.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div css={{ flex: '1 0 0' }}>
          <h4 css={{ textAlign: 'center' }}>{this.state.example.name}</h4>
          <LiveCode>{this.state.example.source}</LiveCode>
        </div>
      </div>
    );
  }
}

export default TryIt;
