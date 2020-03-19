import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

let aux;

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.25.67' })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  // eslint-disable-next-line no-console
  console.tron = tron;

  tron.clear();

  aux = tron;
}

const reactotron = aux;

export default reactotron;
