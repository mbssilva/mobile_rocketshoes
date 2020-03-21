import { select, call, put, all, takeLatest } from 'redux-saga/effects';

import * as actions from './actions';

import formatPrice from '../../../utils/format';
import api from '../../../services/api';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(product => product.id === id)
  );

  if (productExists) {
    const amount = productExists.amount + 1;
    yield put(actions.updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(actions.addToCartSuccess(data));
  }
}

function* updateAmount({ id, newAmount }) {
  const product = yield select(state => state.cart.find(p => p.id === id));

  const currentAmount = product.amount;

  if (newAmount <= 0) {
    yield put(actions.updateAmountSuccess(id, currentAmount));
  } else {
    yield put(actions.updateAmountSuccess(id, newAmount));
  }
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_REQUEST', updateAmount),
]);
