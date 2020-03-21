import * as actions from './actions';

function cart(state = [], action) {
  switch (action.type) {
    case actions.addToCartSuccess().type:
      return [...state, action.product];

    case actions.updateAmountSuccess().type: {
      const { id, newAmount } = action;
      const data = state.map(product => {
        if (id === product.id) product.amount = newAmount;
      });

      return data;
    }

    default:
      return state;
  }
}

export default cart;
