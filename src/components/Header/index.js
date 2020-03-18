import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Logo, Basket } from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Logo />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Basket />
      </TouchableOpacity>
    </Container>
  );
}
