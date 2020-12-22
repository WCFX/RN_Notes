import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Routes
import Home from '../views/Home';
import EditNote from '../views/EditNote';
// components
import ButtonAdd from '../components/ButtonRight';

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#222',
      },
      headerTintColor: '#e9e9e9',
      headerTitleAlign: 'center',
    }}
  >
    <Screen
      options={{
        headerRight: () => <ButtonAdd />,
      }}
      name="Home"
      component={Home}
    />
    <Screen name="EditNote" component={EditNote} />
  </Navigator>
);
