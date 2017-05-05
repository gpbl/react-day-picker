/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';

import Examples from './Examples';
import './styles/main.css';

function render(App) {
  ReactDOM.render(<App />, document.getElementById('root'));
}

render(Examples);

if (module.hot) {
  module.hot.accept('./Examples', () => {
    const App = require('./Examples').default; // eslint-disable-line global-require
    render(App);
  });
}
