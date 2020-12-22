import React from 'react';
import {
  Container,
  ContainerImg,
  NotesImg,
  InfoContainer,
  Title,
  Description,
  ButtonAdd,
  ButtonAddText,
} from './styles';

import notesImg from '../../assets/images/notes.png';

const EditNotes = () => (
  <Container>
    <ContainerImg>
      <NotesImg source={notesImg} />
    </ContainerImg>
  </Container>
);

export default EditNotes;
