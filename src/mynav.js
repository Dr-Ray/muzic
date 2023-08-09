import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screen/home';
import NowPlaying from '../screen/nowplaying';

const MyNav = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName='home'>
            <Stack.Screen 
                name='home'
                component={Home}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name='nowplaying'
                component={NowPlaying}
                options={{
                    headerShown:false
                }}
            />
        </Stack.Navigator>
    )
}

export default MyNav