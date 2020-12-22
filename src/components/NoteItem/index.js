import React from 'react';
import { Box, Title } from './styles';

export default ({ data, index, onPress }) => (
  <Box underlayColor="rgba(24, 177, 193, 0.18)" onPress={() => onPress(index)}>
    <Title>{data.title}</Title>
  </Box>
);
