import React, {Component} from 'react';
import ItemList from './components/itemList'
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

function App() {
  return (
      <Provider store={store}>
          <div className="App">

          </div>
      </Provider>

  );
}

export default App;
