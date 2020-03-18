import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import {
  Wrapper,
  Container,
  AmountAndPrice,
  ProductTitle,
  ProductPrice,
  Trash,
} from './styles';

export default function Header() {
  return (
    <>
      <Wrapper>
        <Image
          source={{
            uri:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
          }}
          style={{ width: 105, height: 105, marginTop: 5 }}
        />
        <Container>
          <ProductTitle>
            <Text>Tênis de Caminhada Leve Confortáve</Text>
          </ProductTitle>
          <ProductPrice>
            <Text>R$ 179,98</Text>
          </ProductPrice>
        </Container>
        <TouchableOpacity>
          <Trash />
        </TouchableOpacity>
      </Wrapper>

      <AmountAndPrice>
        <Text>This is an amount component</Text>
      </AmountAndPrice>
    </>
  );
}
