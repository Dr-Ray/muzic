import { View, Text } from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn'
import Icons from '@expo/vector-icons/FontAwesome'

const TopBar = () => {
  const tw = useTailwind();
  return (
    <View style={tw('flex-row justify-between py-3 mb-2')}>
        <View style={tw('flex-row')}>
          <Icons name="music" size={24} />
          <Text style={tw('ml-1 text-xl font-bold')}>Muzix</Text>
        </View>
        <View>
          <Text style={tw('text-lg font-bold')}>Good evening</Text>
        </View>
        <View style={tw('flex-row')}>
          <Icons name="search" size={20} />
          <Icons name="bell" size={20} style={tw('ml-3')} />
        </View>
    </View>
  )
}

export default TopBar