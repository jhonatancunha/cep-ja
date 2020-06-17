import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// CONFIGURANDO REDUX
import { Provider } from'react-redux'
import configureStore from './redux-flow/configure-store'

// STYLE
import {GlobalStyle} from './styleGlobal'
import EllipseDesktop from './assets/background-right.svg';
import EllipseMobile from './assets/elipsemobile.svg'


const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyle EllipseDesktop={EllipseDesktop} EllipseMobile={EllipseMobile} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
