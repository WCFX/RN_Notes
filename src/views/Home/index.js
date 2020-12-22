import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Container, NotesList } from './styles';

import NoteItem from '../../components/NoteItem';

const Home = () => {
  const list = useSelector((state) => state.notes.list);
  const { navigate } = useNavigation();

  const handleNotePress = (index) => {
    navigate('EditNote', {
      key: index,
    });
  };
  return (
    <Container>
      {list.length > 0 && (
        <NotesList
          data={list}
          renderItem={({ item, index }) => (
            <NoteItem data={item} index={index} onPress={handleNotePress} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </Container>
  );
};

export default Home;
