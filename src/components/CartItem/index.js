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
  ProductControlButton,
  MinusButton,
  PlusButton,
  ProductAmountBox,
  ProductSubTotalBox,
} from './styles';

export default function Header() {
  return (
    <View>
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
        <ProductControlButton>
          <MinusButton />
        </ProductControlButton>
        <ProductAmountBox value="2" />
        <ProductControlButton>
          <PlusButton />
        </ProductControlButton>
        <ProductSubTotalBox>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#7159c1' }}>
            R$ 174,00
          </Text>
        </ProductSubTotalBox>
      </AmountAndPrice>
    </View>
  );
}
