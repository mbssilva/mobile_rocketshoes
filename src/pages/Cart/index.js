import React from 'react';
import { Text } from 'react-native';

import CartItem from '../../components/CartItem';

import { Container, List } from './styles';

function Cart() {
  return (
    <Container>
      <List
        data={[
          { id: '1', nome: 'Matheus' },
          { id: '2', nome: 'Teste' },
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <CartItem product={item} />}
      />
    </Container>
  );
}

export default Cart;
