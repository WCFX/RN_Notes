import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes/app.routes';

import { store, persistor } from './store';

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#eee" />
        <Routes />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);
