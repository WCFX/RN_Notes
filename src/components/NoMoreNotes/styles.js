import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ContainerImg = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 50px;
`;
export const InfoContainer = styled.View`
  padding: 0 40px;
`;

export const Title = styled.Text`
  font-size: 48px;
  letter-spacing: 8px;
  color: #0e113c;
  font-family: FjallaOne-Regular;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #333;
  font-family: Poppins-Light;
`;

export const ButtonAdd = styled.TouchableOpacity`
  justify-content: center;
  border: 2px solid #fff;
  elevation: 11;
  width: 250px;
  height: 50px;
  border-radius: 10px;
  background-color: #ffcae4;
`;

export const ButtonAddText = styled.Text`
  color: #444;
  font-size: 28px;
  /* font-family: Poppins-Regular; */
  font-family: Sniglet-Regular;
  align-self: center;
`;

export const WhereAreTheNotes = styled.Image`
  width: 500px;
  height: 500px;
`;
