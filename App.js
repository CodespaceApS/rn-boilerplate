import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation-tab'
import Context from './src/contexts'
import Apollo from './src/apollo'

export default function App() {
  return (
    <NavigationContainer>
      <Context.Provider>
      <Apollo>
        <Navigation />
      </Apollo>
      </Context.Provider>
    </NavigationContainer>
  )
}