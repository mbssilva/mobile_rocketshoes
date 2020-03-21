import { select, call, put, all, takeLatest } from 'redux-saga';

import * as actions from './actions';

import api from '../../../services/api';

function* addToCartRequest({ id }) {
  const productExists = yield select(state =>
    state.cart.find(product => product.id === id)
  );

  if (productExists) {
    yield put(actions.updateAmountSuccess(id, productExists.amount + 1));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
    };

    yield put(actions.addToCartSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCartRequest)]);
