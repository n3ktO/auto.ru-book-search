import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from './state/store';

import App from './App';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
    overflow-y: scroll;
    width: 100%;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);