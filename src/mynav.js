import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icons from '@expo/vector-icons/FontAwesome'

import Home from '../screen/home';
import Settings from '../screen/settings';
import NowPlaying from '../screen/nowplaying';

const MyNav = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                headerShown:false,
                tabBarIcon: ({ focused }) => (
                    <Icons name="home" size={20} />
                ),
                }}
            />
            <Tab.Screen 
                name="NowPlaying" 
                component={NowPlaying} 
                options={{
                headerShown:false,
                tabBarLabel: 'Muzix',
                tabBarIcon: ({ focused }) => (
                    <Icons name="music" size={20} />
                ),
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={Settings} 
                options={{
                tabBarIcon: ({ focused }) => (
                    <Icons name="gear" size={20} />
                ),
                }}
            />
        </Tab.Navigator>
    )
}

export default MyNav