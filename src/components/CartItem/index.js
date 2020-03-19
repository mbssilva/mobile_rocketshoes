import React from 'react';
import { Image, Text, View } from 'react-native';

import {
  Wrapper,
  Container,
  AmountAndPrice,
  ProductTitle,
  ProductPrice,
  Trash,
  TrashContainer,
} from './styles';

export default function Header() {
  return (
    <View style={{ backgroundColor: 'red' }}>
      <Wrapper>
        <Image
          source={{
            uri:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
          }}
          style={{ width: 105, height: 105, margin: 5 }}
        />
        <Container>
          <ProductTitle>
            <Text numberOfLines={3} style={{ fontSize: 15 }}>
              Tênis de Caminhada Leve Confortáve de Passeio
            </Text>
          </ProductTitle>
          <ProductPrice>
            <Text
              numberOfLines={3}
              style={{
                fontSize: 17,
                fontWeight: 'bold',
              }}
            >
              R$ 179,98
            </Text>
          </ProductPrice>
        </Container>
        <TrashContainer>
          <Trash />
        </TrashContainer>
      </Wrapper>

      <AmountAndPrice>
        <Text>This is an amount component</Text>
      </AmountAndPrice>
    </View>
  );
}
