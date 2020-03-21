import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../../components/CartItem';

import { Container, List } from './styles';

function Cart({ cart }) {
  return (
    <Container>
      <List
        data={cart}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <CartItem productToRender={item} />}
      />
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
