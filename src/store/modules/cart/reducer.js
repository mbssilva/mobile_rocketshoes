import * as actions from './actions';

function cart(state = [], action) {
  switch (action.type) {
    case actions.addToCartSuccess().type:
      return [...state, action.product];

    case actions.updateAmountSuccess().type: {
      const { id, newAmount } = action;

      for (let i = 0; i < state.length; i += 1) {
        // eslint-disable-next-line no-param-reassign
        if (state[i].id === id) state[i].amount = newAmount;
      }

      return state;
    }

    default:
      return state;
  }
}

export default cart;
