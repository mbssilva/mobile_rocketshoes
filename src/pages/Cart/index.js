import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CartItem from '../../components/CartItem';

import {
  Container,
  List,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
} from './styles';

import formatPrice from '../../utils/format';

function Cart({ cart, total }) {
  if (cart.length) {
    return (
      <>
        <Container>
          <List
            data={cart}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <CartItem product={item} />}
          />
        </Container>

        <TotalContainer>
          <TotalText>TOTAL</TotalText>
          <TotalAmount>{total}</TotalAmount>
          <Order>
            <OrderText>FINALIZAR PEDIDO</OrderText>
          </Order>
        </TotalContainer>
      </>
    );
  }

  return (
    <Container>
      <View
        style={{
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 22,
          margin: 20,
          padding: 10,
        }}
      >
        <Icon name="remove-shopping-cart" size={64} color="#7159c1" />
        <Text style={{ fontSize: 32 }}>Seu carrinho está vazio.</Text>
      </View>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});

export default connect(mapStateToProps)(Cart);
