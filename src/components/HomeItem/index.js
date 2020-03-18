import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { Container, AddButton, Title, Price } from './styles';

export default function Header({ product }) {
  return (
    <Container>
      <Image
        source={{
          uri:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        }}
        style={{ width: 50, height: 50 }}
      />
      <Title>Tênis de Caminhada Leve Confortável</Title>
      <Price>{product.priceFormatted}</Price>
      {/* <Price>R$ 139,90</Price> */}
      <AddButton title="teste" />
    </Container>
  );
}
