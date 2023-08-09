import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native'

const ListSongs = ({ songs }) => {
    const navigation = useNavigation()
    const tw = useTailwind();
    return (
        songs?.map((item, index) =>(
            <TouchableOpacity 
                key={index} 
                style={tw('rounded-full bg-zinc-600/[0.15] p-2 my-2')}
                onPress={()=>{navigation.navigate('nowplaying',{ item })}}
            > 
                <View style={tw('flex-row items-center justify-between')}>
                    <View style={tw('flex-row items-center')}>
                        <View style={tw('w-12 h-12 bg-blue-900 rounded-full mr-2 justify-center items-center')}></View>
                        <View>
                            <Text  style={tw('text-lg font-medium')}>{item.title}</Text>
                            <Text style={tw('text-sm text-gray-500 font-bold')}>{item.artist}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        ))
    )
}

export default ListSongs