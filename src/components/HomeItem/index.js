import React from 'react';
import { Image, Text } from 'react-native';

import { Container, AddButton, Title, Price } from './styles';

export default function Header({ product }) {
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
      <AddButton>
        <Text style={{ color: '#fff', fontSize: 16 }}>ADICIONAR</Text>
      </AddButton>
    </Container>
  );
}
