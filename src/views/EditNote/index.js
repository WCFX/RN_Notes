import React from 'react';
import { Text } from 'react-native';
import {
  Container,
  ContainerForm,
  Scroller,
  TitleInput,
  BodyInput,
  ContainerImg,
  NotesImg,
} from './styles';

import notesImg from '../../assets/images/notes.png';

const EditNotes = () => (
  <Container>
    <ContainerForm>
      <TitleInput />
      <Scroller>
        <BodyInput />
      </Scroller>
    </ContainerForm>

    <ContainerImg>
      <NotesImg source={notesImg} />
    </ContainerImg>
  </Container>
);

export default EditNotes;
