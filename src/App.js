import React, {Component} from 'react';
import ItemList from './components/itemList'
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from './store/configureStore';



function App() {
  return (
      <Provider store={store}>
          <div>
              <ItemList/>
          </div>
      </Provider>

  );
}

export default App;
