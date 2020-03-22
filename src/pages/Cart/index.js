import React from 'react';
import { connect } from 'react-redux';
import Reactotron from 'reactotron-react-native';

import CartItem from '../../components/CartItem';

import { Container, List } from './styles';

function Cart({ cart }) {
  Reactotron.warn(cart);

  return (
    <Container>
      {cart.map(product => (
        <CartItem key={String(product.id)} productId={product.id} />
      ))}
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: product.price * product.amount,
    // subTotal: formatPrice(product.price * product.amount),
  })),
});

export default connect(mapStateToProps)(Cart);
