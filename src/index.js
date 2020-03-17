import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar backgroundColor="#191920" />
      <Routes />
    </>
  );
}

export default App;
