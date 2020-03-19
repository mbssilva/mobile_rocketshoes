import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Wrapper = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-radius: 10px;
  height: 120px;
  width: auto;
  margin: 5px 5px 2px;
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

export const AmountAndPrice = styled.View`
  flex-direction: row;
  margin: 0 20px;
  padding: 1px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: #eee;
  align-items: center;
`;

export const ProductControlButton = styled.View`
  padding: 2px;
`;

export const MinusButton = styled(Icon).attrs({
  name: 'remove-circle-outline',
  size: 25,
  color: '#7159c1',
})`
  margin-left: 5px;
`;

export const PlusButton = styled(Icon).attrs({
  name: 'add-circle-outline',
  size: 25,
  color: '#7159c1',
})``;

export const ProductAmountBox = styled.TextInput.attrs({
  readonly: true,
  allowFontScaling: false,
})`
  background-color: #fff;
  height: 30px;
  width: 40px;
  padding: 0;
  text-align: center;
  border: 2px solid #ccc;
  margin: 1px 3px;
`;

export const ProductSubTotalBox = styled.View`
  margin-right: 10px;
  margin-left: auto;
`;
