import React from 'react';

import LiveCode from '../ui/LiveCode';
import Page from '../ui/Page';
import Wrap from '../ui/Wrap';
import Grid from '../ui/Grid';
import GridColumn from '../ui/GridColumn';

import examplesGroups from '../examples';

export default class Examples extends React.Component {
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
      window.history.pushState(null, null, `/examples/${example.url}.html`);
      window.scrollTo(0, 0);
      this.setState({ example });
    };
  }
  render() {
    return (
      <Page>
        <Wrap>
          <Grid>
            <GridColumn>
              <h3 style={{ marginTop: 0 }}>Examples</h3>
              {examplesGroups.map(group => (
                <div>
                  <h4
                    css={{
                      textTransform: 'uppercase',
                      fontWeight: 400,
                      fontSize: 12,
                      marginTop: '1.5em',
                      marginBottom: '.5em',
                    }}
                  >
                    {group.title}
                  </h4>
                  <ul
                    css={{
                      listStyle: 'none',
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {group.examples.map(example => (
                      <li css={{ margin: 0, padding: '.25em 0' }}>
                        <a href="#" onClick={this.handleExampleClick(example)}>
                          {example.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </GridColumn>
            <GridColumn span={2.5}>
              <h2 style={{ marginTop: 0 }}>{this.state.example.name}</h2>
              <LiveCode>{this.state.example.source}</LiveCode>
            </GridColumn>
          </Grid>
        </Wrap>
      </Page>
    );
  }
}
