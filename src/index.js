import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './static/style/index.less'
import './static/style/reset.css'
import App from './App';
import store from './store'
import './icons'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

