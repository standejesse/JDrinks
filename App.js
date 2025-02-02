import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/auth';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#004d84'}
      />
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}
