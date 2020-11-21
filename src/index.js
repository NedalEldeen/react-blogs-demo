import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'state/Store';
import App from './App';
import './style.scss';

const render = (Component) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Component />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextRootContainer = require('./App').default;
    render(NextRootContainer);
  });
}
