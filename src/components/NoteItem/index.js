import React from 'react';
import { Container, Box, Title } from './styles';

export default ({ data, index, onPress }) => (
  <Container>
    <Box
      style={{
        backgroundColor: `hsla(${Math.random() * 360}, 100%, 70%, 1)`,
      }}
      underlayColor="rgba(24, 177, 193, 0.18)"
      onPress={() => onPress(index)}
    >
      <Title>{data.title}</Title>
    </Box>
  </Container>
);
