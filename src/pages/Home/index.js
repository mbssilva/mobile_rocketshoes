import React, { Component } from 'react';
import Reactotron from 'reactotron-react-native';
import '../../config/ReactotronConfig';

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
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    Reactotron.warn('teste');

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