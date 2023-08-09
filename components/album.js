import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import {useTailwind} from 'tailwind-rn';
import Icons from '@expo/vector-icons/FontAwesome';
import appContext from '../src/context';

const Album = () => {
    const { music } = useContext(appContext);
    const tw = useTailwind();
    return (
        <View>
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}> 
                {
                    music?.map((item,index) => (
                        <TouchableOpacity
                        key={index} 
                        >
                            <ImageBackground 
                                style={tw('w-36 h-44 bg-blue-200 p-2 rounded-2xl mr-4')}
                                source={item.image}
                            >
                                <View style={tw('justify-end items-start h-full')}>
                                    <View style={tw('flex-row items-center justify-between bg-zinc-600/[0.15] px-2 py-1 rounded-full w-full')}>
                                        <Text style={tw('text-lg text-white font-medium')}>{item.artist}</Text> 
                                        <Icons name="play-circle" color="white" size={24}/>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    ))
                }
                
            </ScrollView>
        </View>
    )
}

export default Album