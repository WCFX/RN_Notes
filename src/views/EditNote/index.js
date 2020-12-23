import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, TitleInput, BodyInput } from './styles';

import notesImg from '../../assets/images/notes.png';

const EditNotes = () => {
  const { navigate } = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.notes.list);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('new');

  return (
    <Container>
      <TitleInput
        // maxLength={30}
        value={title}
        onChangeText={(t) => setTitle(t)}
        placeholder="Título"
        placeholderTextColor="#555"
      />
      {/* <Scroller> */}
      <BodyInput
        value={body}
        onChangeText={setBody}
        placeholder="Texto aqui"
        placeholderTextColor="#555"
      />
      {/* </Scroller> */}
    </Container>
  );
};

export default EditNotes;
