import React from 'react';
import Icon from 'react-native-vector-icons/Foundation';
import { useNavigation } from '@react-navigation/native';
import { ButtonAdd, ButtonAddText } from './styles';

const ButtonRight = () => {
  const { navigate } = useNavigation();

  function handleNavigateToCreateNote() {
    navigate('EditNote');
  }
  return (
    <ButtonAdd onPress={handleNavigateToCreateNote}>
      <ButtonAddText>
        <Icon name="clipboard-pencil" size={24} color="#18b1c1" />
      </ButtonAddText>
    </ButtonAdd>
  );
};

export default ButtonRight;
