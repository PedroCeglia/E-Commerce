import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import React Redux
import {Provider} from 'react-redux'

// Import Store
import store from './Store/Duck'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

