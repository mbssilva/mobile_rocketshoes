import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../../components/CartItem';

import { Container, List } from './styles';

// import formatPrice from '../../utils/format';

function Cart({ cart }) {
  return (
    <Container>
      {/* <List
        data={cart}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <CartItem productId={item.id} productAmount={item.amount} />}
      /> */}
      {cart.map(product => (
        <CartItem
          key={String(product.id)}
          product={product}
          amount={product.amount}
        />
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
  // total: formatPrice(
  //   state.cart.reduce(
  //     (total, product) => total + product.price * product.amount,
  //     0
  //   )
  // ),
});

export default connect(mapStateToProps)(Cart);
