import React from 'react';
import { useSelector } from 'react-redux';
import { Container, NotesList } from './styles';

import NoteItem from '../../components/NoteItem';

const Home = () => {
  const list = useSelector((state) => state.notes.list);

  const handleNotePress = () => {};
  return (
    <Container>
      <NotesList
        data={list}
        renderItem={({ item, index }) => (
          <NoteItem data={item} index={index} onPress={handleNotePress} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
};

export default Home;
