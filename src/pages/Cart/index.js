import React from 'react';
import { connect } from 'react-redux';
import Reactotron from 'reactotron-react-native';

import CartItem from '../../components/CartItem';

import { Container, List } from './styles';

import formatPrice from '../../utils/format';

function Cart({ cart }) {
  Reactotron.warn(cart);

  return (
    <Container>
      <List
        data={cart}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <CartItem product={item} />}
      />
    </Container>
    // <Container>
    //   {cart.map(product => (
    //     <CartItem key={String(product.id)} product={product} />
    //   ))}
    // </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
});

export default connect(mapStateToProps)(Cart);
