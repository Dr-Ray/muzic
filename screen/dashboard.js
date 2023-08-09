import { View, Text, ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import {useTailwind} from 'tailwind-rn'

import Jumbotron from '../components/jumbotron';
import Album from '../components/album';
import ListSongs from '../components/listsongs';
import TopBar from '../components/topbar';

import my_music from '../music/music';
import my_news from '../music/news';
import appContext from '../src/context';

function Dashboard ({navigation}) {
  const {setMusic,news,music, setArtist, setNews} = useContext(appContext);
  useEffect(() => {
    setMusic(my_music);
    setNews(my_news)
  }, []);
  
  const tw = useTailwind();

  return (
    <View style={[tw('px-3 pt-2 relative h-full'), {marginTop:30, backgroundColor:"#F5F6FA"}]}>
      <TopBar />
      <Jumbotron news={news}/>

      <View style={tw('flex-row justify-between py-2 my-2')}>
        <Text style={tw('text-xl font-bold')}>Artists</Text>
        <Text style={tw('text-lg text-slate-500 font-medium')} onPress={()=>{navigation.navigate('My songs')}}>See all</Text>
      </View>

      <Album />

      <View style={tw('flex-row justify-between py-2 my-2')}>
        <Text style={tw('text-xl font-bold')}>Fresh outs</Text>
        <Text style={tw('text-lg text-slate-500 font-medium')}>See all</Text>
      </View>

      <ScrollView style={{height:310,marginBottom:28}} showsVerticalScrollIndicator={false}>
        <ListSongs songs={music}/>
      </ScrollView>
    </View>
  )
}

export default Dashboard