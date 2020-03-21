import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Reactotron from 'reactotron-react-native';

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

class CartItem extends Component {
  // const product = cart.find(product => product.id === productToRender.id);

  decreaseNumberOfProducts = () => {
    const { dispatch, product } = this.props;
    dispatch(updateAmountRequest(product.id, product.amount - 1));
  };

  increaseNumberOfProducts = () => {
    const { dispatch, product } = this.props;
    dispatch(updateAmountRequest(product.id, product.amount + 1));
  };

  render() {
    const { product } = this.props;

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
              this.decreaseNumberOfProducts();
            }}
          >
            <MinusButton />
          </ProductControlButton>
          <ProductAmountBox value={String(product.amount)} />
          <ProductControlButton
            onPress={() => {
              this.increaseNumberOfProducts();
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
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartItem);
