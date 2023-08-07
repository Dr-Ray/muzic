import { View, Text } from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn'
import Icons from '@expo/vector-icons/FontAwesome'

const Jumbotron = () => {
    const tw = useTailwind();
    return (
        <View>
            <View style={[tw('p-4 rounded-lg h-44 flex-row justify-between'),{backgroundColor:"#604AF1"}]}>
                <View style={tw('justify-end')}>
                    <Text style={tw('text-white justify-center border-solid border-2  border-slate-100 p-1 my-2 rounded-full w-20 text-center')}>Just in</Text>
                    <Text style={tw('text-2xl text-white font-bold')}>Sweet Melody</Text>
                    <Text style={tw('text-lg text-gray-300 font-bold')}>Little Mix, and Melody</Text>
                </View>
                <View style={tw('justify-end')}>
                    <Text style={tw('justify-center bg-slate-300 px-2 py-1 rounded-full')}>Listen <Icons name="play-circle" color="white" size={20}/></Text>
                </View>
            </View>
        </View>
    )
}

export default Jumbotron