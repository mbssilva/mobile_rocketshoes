import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/Images/logo.png';

export const Container = styled.View`
  flex-direction: row;
  background-color: #191920;
  height: 45px;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'stretch',
})`
  width: 185px;
  height: 25px;
  margin-left: 12px;
`;

export const Basket = styled(Icon).attrs({
  name: 'shopping-basket',
  color: '#FFF',
  size: 30,
})`
  margin-right: 14px;
`;
