import React from 'react';
import Icons from '@expo/vector-icons/FontAwesome'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from './dashboard';
import LocalList from './locallist';
import Settings from '../screen/settings';

const Home = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName='dashboard'>
            <Tab.Screen 
                name='dashboard' 
                component={Dashboard} 
                options={{
                    headerShown:false,
                    tabBarIcon: ({ focused }) => (
                        <Icons name="home" size={20} />
                    ),
                }}
            />
            <Tab.Screen 
                name="My songs" 
                component={LocalList} 
                options={{
                    tabBarLabel: 'Songs',
                    tabBarIcon: ({ focused }) => (
                        <Icons name="music" size={20} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={Settings} 
                options={{
                    tabBarLabel: 'settings',
                    tabBarIcon: ({ focused }) => (
                        <Icons name="gear" size={20} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Home