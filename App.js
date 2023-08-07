import { StatusBar } from 'expo-status-bar';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json'
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

import appContext from './src/context';

import MyNav from './src/mynav';

export default function App() {
  const [nowPlaying, setnowPlaying] = useState('');
  const [prev, setPrev] = useState('');
  const [next, setNext] = useState('');

  const [repeatSingle, setrepeatSingle] = useState(false);
  const [shuffle, setshuffle] = useState(false);
  const [repeatAll, setrepeatAll] = useState(false);
  return (
    <TailwindProvider utilities={utilities}>
        <appContext.Provider val={{nowPlaying,prev,next,repeatAll,repeatSingle,shuffle, setnowPlaying,setPrev,setNext,setrepeatAll,setrepeatSingle,setshuffle}}>
          <NavigationContainer>
            <StatusBar style="auto" />
            <MyNav />
          </NavigationContainer>
        </appContext.Provider>
    </TailwindProvider>
  );
}
