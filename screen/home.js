import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import {useTailwind} from 'tailwind-rn'
import Jumbotron from '../components/jumbotron';
import Album from '../components/album';
import ListSongs from '../components/listsongs';
import TopBar from '../components/topbar';

const Home = () => {
  const tw = useTailwind();
  return (
    <View style={[tw('px-3 pt-2'), {marginTop:30, backgroundColor:"#F5F6FA"}]}>
      <TopBar />
      <Jumbotron />

      <View style={tw('flex-row justify-between py-2 my-2')}>
        <Text style={tw('text-xl font-bold')}>Albums</Text>
        <Text style={tw('text-lg text-slate-500 font-medium')}>See all</Text>
      </View>

      <Album />

      <View style={tw('flex-row justify-between py-2 my-2')}>
        <Text style={tw('text-xl font-bold')}>Recently played</Text>
        <Text style={tw('text-lg text-slate-500 font-medium')}>See all</Text>
      </View>
      
      <ScrollView style={{height:300}}>
        <ListSongs />
      </ScrollView>
    </View>
  )
}

export default Home