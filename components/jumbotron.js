import { View, Text, FlatList } from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn'
import Icons from '@expo/vector-icons/FontAwesome'

const Jumbotron = ({news}) => {
    const tw = useTailwind();

    const _render = ({item}) => {
        return (
            <View style={[tw('p-4 rounded-lg h-44 w-96 mr-1'),{backgroundColor:"#604AF1"}]}>
                <View style={tw('h-full flex-row justify-between')}>
                    <View style={tw('justify-end')}>
                        <Text style={tw('text-2xl text-white font-bold')}>{item.title}</Text>
                        <Text style={tw('text-lg text-gray-300 font-bold')}>{item.slug}</Text>
                    </View>
                    <View style={tw('justify-end')}>
                        <Text style={tw('justify-center bg-slate-300 px-2 py-1 rounded-full')}>Listen <Icons name="play-circle" color="white" size={20}/></Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <FlatList 
            renderItem={_render}
            data={news}
            keyExtractor={item =>item.id}
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={()=>{}}
        />
    )
}

export default Jumbotron