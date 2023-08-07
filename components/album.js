import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn'
import Icons from '@expo/vector-icons/FontAwesome'

const Album = () => {
    const tw = useTailwind();
    return (
        <View>
            <ScrollView horizontal={true}> 
                <View style={tw('w-36 h-44 bg-blue-200 p-2 rounded-2xl mr-4')}>
                    <View style={tw('justify-end items-start h-full')}>
                        <View style={tw('flex-row items-center justify-between bg-zinc-600/[0.15] px-2 py-1 rounded-full w-full')}>
                            <Text style={tw('text-lg text-white font-medium')}>Listen</Text> 
                            <Icons name="play-circle" color="white" size={24}/>
                        </View>
                    </View>
                </View>
                <View style={tw('w-36 h-44 bg-blue-200 p-2 rounded-2xl mr-4')}>
                    <View style={tw('justify-end items-start h-full')}>
                        <View style={tw('flex-row items-center justify-between bg-zinc-600/[0.15] px-2 py-1 rounded-full w-full')}>
                            <Text style={tw('text-lg text-white font-medium')}>Listen</Text> 
                            <Icons name="play-circle" color="white" size={24}/>
                        </View>
                    </View>
                </View>
                <View style={tw('w-36 h-44 bg-blue-200 p-2 rounded-2xl mr-4')}>
                    <View style={tw('justify-end items-start h-full')}>
                        <View style={tw('flex-row items-center justify-between bg-zinc-600/[0.15] px-2 py-1 rounded-full w-full')}>
                            <Text style={tw('text-lg text-white font-medium')}>Listen</Text> 
                            <Icons name="play-circle" color="white" size={24}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Album