import React from 'react';
import { Box, Title } from './styles';

export default ({ data, item, onPress }) => (
  <Box>
    <Title>{data.title}</Title>
  </Box>
);
