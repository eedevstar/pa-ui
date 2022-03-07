import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './containers/App/App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react'

import * as serviceWorker from './serviceWorker';

import { extendTheme } from "@chakra-ui/react"

import theme from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
