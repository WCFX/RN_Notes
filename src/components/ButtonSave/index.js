import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ButtonAdd, ButtonAddText } from './styles';

const ButtonSave = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.notes.list);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('new');

  useEffect(() => {
    if (route.params?.key != undefined && list[route.params.key]) {
      setStatus('edit');
      setTitle(list[route.params.key].title);
      setBody(list[route.params.key].body);
    }
  }, []);

  const handleSaveButton = () => {
    if (title != '' && body != '') {
      console.log('Entrou no if');
    } else {
      alert('preencha titulo e corpo');
    }
  };

  return (
    <ButtonAdd onPress={handleSaveButton}>
      <ButtonAddText>
        <Icon name="content-save-edit-outline" size={24} color="#fcf0cc" />{' '}
        SALVAR
      </ButtonAddText>
    </ButtonAdd>
  );
};

export default ButtonSave;
