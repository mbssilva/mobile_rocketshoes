import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #191920;
  padding: 5px;
`;

export const List = styled.FlatList.attrs({
  horizontal: false,
  showsHorizontalScrollIndicator: false,
})``;

export const TotalContainer = styled.View`
  margin-top: 30px;
`;

export const TotalText = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
`;

export const TotalAmount = styled.Text`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
`;

export const Order = styled.TouchableOpacity`
  background: #7159c1;
  padding: 12px;
  border-radius: 4px;
`;

export const OrderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;
