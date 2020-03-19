import React from 'react';

import CartItem from '../../components/CartItem';

import { Container, List } from './styles';

function Cart(props) {
  return (
    <Container>
      <List
        data={[
          { id: '1', nome: 'Matheus' },
          { id: '2', nome: 'Teste' },
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <CartItem product={item} {...props} />}
      />
    </Container>
  );
}

export default Cart;
