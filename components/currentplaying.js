import { View, Text } from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn'
import Icons from '@expo/vector-icons/FontAwesome'

const CurrentPlaying = () => {
    const tw = useTailwind();
  return (
    <View>
        <View style={tw('absolute bottom-10 mx-auto flex-row items-center justify-between my-2 w-full px-3 py-2 rounded-full bg-blue-400/[0.15]')}>
            <View style={tw('flex-row items-center')}>
                <View style={tw('w-12 h-12 bg-blue-900 rounded-full mr-2 justify-center items-center')}></View>
                <View>
                    <Text  style={tw('text-lg font-medium')}>One Thing Right</Text>
                    <Text style={tw('text-xs text-gray-500')}>Ed Shearan</Text>
                </View>
            </View>
            <View style={tw('flex-row items-center justify-between w-20')}>
                <Icons name="step-backward" size={20} />
                <Icons name="play" size={20} style={tw('rounded-full')}/>
                <Icons name="step-forward" size={20} />
            </View>
        </View>
    </View>
  )
}

export default CurrentPlaying