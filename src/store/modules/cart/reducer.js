import produce from 'immer';

import * as actions from './actions';

function cart(state = [], action) {
  switch (action.type) {
    case actions.addToCartSuccess().type:
      return [...state, action.product];

    case actions.updateAmountSuccess().type: {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          // eslint-disable-next-line no-param-reassign
          draft[productIndex].amount = Number(action.newAmount);
        }
      });
    }

    default:
      return state;
  }
}

export default cart;
