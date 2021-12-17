import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import React Redux
import {Provider} from 'react-redux'

// Import Store
import store from './Store/Duck'

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  ,
  document.getElementById('root')
);

