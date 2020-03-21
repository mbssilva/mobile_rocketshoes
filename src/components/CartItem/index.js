import React from 'react';
import { Image, Text, View } from 'react-native';
import { connect } from 'react-redux';

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

function CartItem({ product }) {
  return (
    <View>
      <Wrapper>
        <Image
          source={{
            uri: product.image,
          }}
          style={{ width: 105, height: 105, margin: 5 }}
        />
        <Container>
          <ProductTitle>
            <Text numberOfLines={3} style={{ fontSize: 15 }}>
              {product.title}
            </Text>
          </ProductTitle>
          <ProductPrice>
            <Text
              numberOfLines={3}
              style={{
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              {product.priceFormatted}
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
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>R$ 174,00</Text>
        </ProductSubTotalBox>
      </AmountAndPrice>
    </View>
  );
}

export default connect()(CartItem);
