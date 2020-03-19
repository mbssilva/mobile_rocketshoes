import { createStore } from 'redux';

import reactotron from '../config/ReactotronConfig';

import rootReducer from './modules/rootReducer';

const enhancer = __DEV__ ? reactotron.createEnhancer() : null;

const store = createStore(rootReducer, enhancer);

export default store;
