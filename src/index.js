import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#191920" />
      <Routes />
    </Provider>
  );
}

export default App;
