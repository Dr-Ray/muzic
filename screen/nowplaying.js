import { View, Text, Image } from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn'
import Ionicons from '@expo/vector-icons/Ionicons'
import TopBar from '../components/topbar'
import { useRoute } from '@react-navigation/native'

const NowPlaying = () => {
  const params = useRoute();
  const {artist, image, title} = params.params.item;
  const tw = useTailwind();
  return (
    <View style={[tw('px-3 pt-2 relative h-full'), {marginTop:30, backgroundColor:"#F5F6FA"}]}>
      <TopBar text=' ' />
      <View style={tw('my-8')}>
        <Text style={tw('text-center text-2xl font-bold')}>{title}</Text>
        <Text style={tw('text-center text-sm font-medium')}>{artist}</Text>
      </View>

      <View>
        <View style={[tw('mx-auto border-4 rounded-full bg-gray-400 justify-center items-center'),{width:330,height:330}]}>
          <Image
            style={[tw('p-4 rounded-full h-80 w-80 mx-auto')]} 
            source={image}
            resizeMode="cover"
          />
        </View>
      </View>

      <View style={tw('px-8 my-16')}>
        <View style={[tw('h-2 rounded-full  bg-gray-400')]}>
          <View style={[tw('h-2 rounded-full '),{backgroundColor:"#6C47D2",width:45+"%"}]}></View>
        </View>
        <View style={tw('flex-row justify-center items-center my-2')}>
          <Ionicons name="shuffle" size={24}/>
          <Ionicons name="play-skip-back" size={24} style={tw('mx-8')}/>
          <Ionicons name="pause" size={40} style={tw('mx-8')}/>
          <Ionicons name="play-skip-forward" size={24} style={tw('mx-8')}/>
          <Ionicons name="repeat" size={24}/>
        </View>
      </View>

      <View style={tw('py-6 rounded-full flex-row justify-center my-16 justify-around bg-blue-400/[0.15]')}>
        <Text>UP NEXT</Text>
        <Text style={tw('border-x-2 px-16')}>LYRICS</Text>
        <Text>RELATED</Text>
      </View>
    </View>
  )
}

export default NowPlaying