import React from 'react';
import { Container, ContainerImg, NotesImg } from './styles';

import notesImg from '../../assets/images/notes.png';

const EditNotes = () => (
  <Container>
    <ContainerImg>
      <NotesImg source={notesImg} />
    </ContainerImg>
  </Container>
);

export default EditNotes;
