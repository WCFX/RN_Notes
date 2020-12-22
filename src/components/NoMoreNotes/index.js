import React from 'react';
import Icon from 'react-native-vector-icons/Foundation';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ContainerImg,
  WhereAreTheNotes,
  InfoContainer,
  Title,
  Description,
  ButtonAdd,
  ButtonAddText,
} from './styles';

import whereImg from '../../assets/images/where.jpg';

const NoMoreNotes = () => {
  const { navigate } = useNavigation();

  function handleNavigateToCreateNote() {
    navigate('EditNote');
  }
  return (
    <Container>
      <ContainerImg>
        <WhereAreTheNotes source={whereImg} />
      </ContainerImg>
      <InfoContainer>
        <Title>WHOOOPS!!</Title>
        <Description>
          Acho que estamos sem notas por aqui não é ? Facilitei pra você, aqui
          embaixo está um botão para você criar novas notas.
        </Description>
        <ButtonAdd onPress={handleNavigateToCreateNote}>
          <ButtonAddText>Criar Anotações{'    '}</ButtonAddText>
        </ButtonAdd>
      </InfoContainer>
    </Container>
  );
};

export default NoMoreNotes;
