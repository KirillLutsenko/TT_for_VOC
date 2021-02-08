import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { WrappedMainComponent } from './App';
import { rootReducer } from './components/Store/reducers';

export const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <WrappedMainComponent />
  </Provider>,
  document.getElementById('root'),
);
