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

import { updateAmountRequest } from '../../store/modules/cart/actions';

// import formatPrice from '../../utils/format';

function CartItem({ cart, dispatch, product, amount }) {
  const productAmount = cart.find(p => p.id === product.id).amount;

  const decreaseNumberOfProducts = () => {
    dispatch(updateAmountRequest(product.id, productAmount - 1));
  };

  const increaseNumberOfProducts = () => {
    dispatch(updateAmountRequest(product.id, productAmount + 1));
  };

  // const cartIndex = cart.findIndex(p => p.id === Id);
  // const product = cart[cartIndex];

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
        <ProductControlButton
          onPress={() => {
            decreaseNumberOfProducts();
          }}
        >
          <MinusButton />
        </ProductControlButton>
        <ProductAmountBox value={String(productAmount)} />
        <ProductControlButton
          onPress={() => {
            increaseNumberOfProducts();
          }}
        >
          <PlusButton />
        </ProductControlButton>
        <ProductSubTotalBox>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>R$ 174,00</Text>
        </ProductSubTotalBox>
      </AmountAndPrice>
    </View>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: product.price * product.amount,
    // subTotal: formatPrice(product.price * product.amount),
  })),
});

export default connect(mapStateToProps)(CartItem);
