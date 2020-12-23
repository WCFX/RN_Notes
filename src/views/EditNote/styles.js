import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: #fff;
  border-top-width: 4px;
  border-style: solid;
  border-color: #f99;
  margin-top: 60px;
  padding: 0 10px;
`;
export const Scroller = styled.ScrollView``;

export const TitleInput = styled.TextInput`
  font-size: 34px;
  letter-spacing: 2px;
  width: 100%;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #ccc;
`;

export const BodyInput = styled.TextInput`
  font-size: 28px;
  /* padding: 20px 30px; */
  /* width: 80%; */
  /* height: 90%; */
  /* border: 1px solid red; */
`;

export const ButtonAdd = styled.TouchableOpacity`
  padding: 10px 10px 10px 12px;
  margin-right: 10px;
  border: 1px solid #fcf0cc;
  border-radius: 10px;
  background-color: #222;
`;

export const ButtonAddText = styled.Text`
  color: #eeee;
`;
