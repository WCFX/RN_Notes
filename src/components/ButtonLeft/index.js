import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { ButtonAdd, ButtonAddText } from './styles';

const ButtonLeft = () => {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }
  return (
    <ButtonAdd onPress={handleGoBack}>
      <ButtonAddText>
        <Icon name="angle-double-left" size={24} color="#fcf0cc" />
      </ButtonAddText>
    </ButtonAdd>
  );
};

export default ButtonLeft;
