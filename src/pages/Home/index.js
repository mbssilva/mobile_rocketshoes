import React, { Component } from 'react';
import { Text, View } from 'react-native';

import api from '../../services/api';
import formatPrice from '../../utils/format';

import HomeItem from '../../components/HomeItem';

import { Container, Texto } from './styles';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        {products.map(product => (
          <HomeItem key={product.id} product={product} />
        ))}
        {/* <HomeItem /> */}
        <Texto>Hello Home</Texto>
      </Container>
    );
  }
}

export default Home;
