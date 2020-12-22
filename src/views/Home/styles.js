import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ccc;
`;

export const NotesList = styled.FlatList`
  flex: 1;
  width: 100%;
  border: 1px solid red;
  padding-top: 100px;
`;
