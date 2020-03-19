import React from 'react';
import { Image, Text } from 'react-native';
import { connect } from 'react-redux';

import { Container, AddButton, Title, Price } from './styles';

function HomeItem({ product, dispatch }) {
  function handleAddProduct() {
    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  }

  return (
    <Container>
      <Image
        source={{
          uri: product.image,
        }}
        style={{ width: 105, height: 105, marginTop: 5 }}
      />
      <Title>{product.title}</Title>
      <Price>{product.priceFormatted}</Price>
      <AddButton
        type="button"
        onPress={() => {
          handleAddProduct();
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>ADICIONAR</Text>
      </AddButton>
    </Container>
  );
}

export default connect()(HomeItem);
