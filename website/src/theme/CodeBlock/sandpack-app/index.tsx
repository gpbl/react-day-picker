import React, { StrictMode } from 'react';

/** Root file used by the Sandpack */
import 'react-day-picker/dist/style.css';
import ReactDOM from 'react-dom';

import App from './App';
import './styles.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
