import { View, Text } from 'react-native'
import React from 'react'
import ListSongs from '../components/listsongs'

import my_music from '../music/music';
const LocalList = () => {
  return (
    <View style={{height:"100%",backgroundColor:"#6cacbc"}}>
      <ListSongs newsongs={my_music}/>
    </View>
  )
}

export default LocalList;