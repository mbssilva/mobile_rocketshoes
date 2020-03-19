import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Wrapper = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-radius: 5px;
  height: 120px;
  width: auto;
  margin: 5px;
`;

export const Container = styled.View`
  flex-direction: column;
  justify-content: space-evenly;

  border-radius: 8px;
  width: 220px;
  margin: 5px 10px 5px 2px;
`;

export const ProductTitle = styled.View`
  flex: 1;
  margin: 5px 10px 5px 2px;
  justify-content: center;
`;

export const ProductPrice = styled.View`
  flex: 1;
  margin: 5px 10px 5px 2px;
  /* justify-content: center; */
`;

export const AmountAndPrice = styled.View`
  flex-direction: column;
  background-color: #eee;
  align-items: center;
`;

export const Trash = styled(Icon).attrs({
  name: 'delete-forever',
  size: 28,
  color: '#7159c1',
})``;

export const TrashContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 44px 7px;
`;
