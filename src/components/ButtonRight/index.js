import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ButtonAdd, ButtonAddText } from './styles';

const ButtonRight = () => {
  const { navigate } = useNavigation();

  function handleNavigateToCreateNote() {
    navigate('EditNote');
  }
  return (
    <ButtonAdd onPress={handleNavigateToCreateNote}>
      <ButtonAddText>Adicionar</ButtonAddText>
    </ButtonAdd>
  );
};

export default ButtonRight;
