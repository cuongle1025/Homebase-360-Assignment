import React from 'react';
import { AppContextProvider } from './app/context/AppContext';
import HomeScreen from './app/screens/HomeScreen';


export default function App() {

  return (
    <AppContextProvider>
      <HomeScreen/>
    </AppContextProvider>
  );
}