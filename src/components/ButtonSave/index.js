import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { ButtonAdd, ButtonAddText } from './styles';

const ButtonSave = () => {
  const { navigate } = useNavigation();

  return (
    <ButtonAdd onPress={() => {}}>
      <ButtonAddText>
        <Icon name="content-save-edit-outline" size={24} color="#fcf0cc" />{' '}
        SALVAR
      </ButtonAddText>
    </ButtonAdd>
  );
};

export default ButtonSave;
