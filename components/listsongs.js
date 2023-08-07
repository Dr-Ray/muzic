import { View, Text } from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn'
import Icons from '@expo/vector-icons/FontAwesome'

const ListSongs = () => {
    const tw = useTailwind();
    return (
        <View>
            <View style={tw('flex-row items-center justify-between my-2')}>
                <View style={tw('flex-row items-center')}>
                    <View style={tw('w-12 h-12 bg-blue-900 rounded-full mr-2 justify-center items-center')}></View>
                    <View>
                        <Text  style={tw('text-lg font-medium')}>Astronaut in the ocean</Text>
                        <Text style={tw('text-sm text-gray-500 font-bold')}>Ed Shearan</Text>
                    </View>
                </View>
                <View>
                    <Icons name="sort" size={20} />
                </View>
            </View>
        </View>
    )
}

export default ListSongs