import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './src/navigation/Navigation';

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar animated={true} backgroundColor={'#fff'} />
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
