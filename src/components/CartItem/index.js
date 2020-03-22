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

import {
  updateAmountRequest,
  removeProduct,
} from '../../store/modules/cart/actions';

function CartItem({ dispatch, product }) {
  const decreaseNumberOfProducts = () => {
    dispatch(updateAmountRequest(product.id, product.amount - 1));
  };

  const increaseNumberOfProducts = () => {
    dispatch(updateAmountRequest(product.id, product.amount + 1));
  };

  const deleteProduct = () => {
    dispatch(removeProduct(product.id));
  };

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
        <TrashContainer
          onPress={() => {
            deleteProduct();
          }}
        >
          <Trash />
        </TrashContainer>
      </Wrapper>
      <AmountAndPrice>
        <ProductControlButton
          onPress={() => {
            decreaseNumberOfProducts();
          }}
        >
          <MinusButton />
        </ProductControlButton>
        <ProductAmountBox value={String(product.amount)} />
        <ProductControlButton
          onPress={() => {
            increaseNumberOfProducts();
          }}
        >
          <PlusButton />
        </ProductControlButton>
        <ProductSubTotalBox>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{product.subTotal}</Text>
        </ProductSubTotalBox>
      </AmountAndPrice>
    </View>
  );
}

export default connect()(CartItem);
