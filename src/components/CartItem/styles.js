import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Wrapper = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-radius: 5px;
  margin: 5px;
`;

export const Container = styled.View`
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  margin: 0 10px;
  align-items: center;
`;

export const AmountAndPrice = styled.View`
  flex-direction: column;
  background-color: #fff;
  align-items: center;
`;

export const ProductTitle = styled.View``;

export const ProductPrice = styled.View``;

export const Trash = styled(Icon).attrs({
  name: 'delete-forever',
  size: 24,
  color: '#7159c1',
})``;
