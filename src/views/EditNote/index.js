import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  TitleInput,
  BodyInput,
  ButtonAdd,
  ButtonAddText,
} from './styles';

import ButtonSave from '../../components/ButtonSave';
import ButtonGoBack from '../../components/ButtonLeft';
import notesImg from '../../assets/images/notes.png';

const EditNotes = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.notes.list);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('new');

  useEffect(() => {
    if (route.params?.key !== undefined && list[route.params.key]) {
      setStatus('edit');
      setTitle(list[route.params.key].title);
      setBody(list[route.params.key].body);
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: status === 'new' ? 'Criar Anotação' : 'Editar Anotação',
      headerRight: () => (
        <ButtonAdd onPress={handleSaveButton}>
          <ButtonAddText>
            <Icon name="content-save-edit-outline" size={24} color="#fcf0cc" />{' '}
            SALVAR
          </ButtonAddText>
        </ButtonAdd>
      ),
      headerLeft: () => <ButtonGoBack />,
    });
  }, [status, title, body]);

  const handleSaveButton = () => {
    if (title != '' && body != '') {
      console.log('Entrou no if');
    } else {
      alert('preencha titulo e corpo');
    }
  };

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
