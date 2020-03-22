import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';
import formatPrice from '../../utils/format';

import HomeItem from '../../components/HomeItem';

import { Container, List } from './styles';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      await AsyncStorage.setItem('products', JSON.stringify(data));

      this.setState({ products: data });
    } catch (err) {
      const data = await AsyncStorage.getItem('products');

      if (data) {
        this.setState({ products: JSON.parse(data) });
      }
    }
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <List
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <HomeItem product={item} />}
        />
      </Container>
    );
  }
}

export default Home;
