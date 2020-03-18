import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background-color: #fff;
  width: 160px;
  height: 180px;
  border-radius: 5px;
  margin: 5px;
`;

export const Container = styled.View`
  flex-direction: column;
  background-color: #fff;
  width: 170px;
  height: 250px;
  border-radius: 8px;
  margin: 0 10px;
  align-items: center;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 3,
})`
  padding: 3px;
  width: auto;
  font-size: 13px;
  font-family: Arial;
  margin: auto;
  text-align: center;
`;

export const Price = styled.Text`
  width: auto;
  font-size: 20px;
  font-family: Arial;
  margin-top: auto;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  padding: 5px;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 25px;
  border-radius: 4px;
  margin-bottom: 8px;
`;
