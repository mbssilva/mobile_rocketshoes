export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function updateAmountRequest(id, newAmount) {
  return {
    type: '@cart/UPDATE_REQUEST',
    id,
    newAmount,
  };
}

export function updateAmountSuccess(id, newAmount) {
  return {
    type: '@cart/UPDATE_SUCCESS',
    id,
    newAmount,
  };
}

export function removeProduct(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}
