import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome } from '@expo/vector-icons';

import HomeStackScreen from './../Screens/Home/HomeScreen'
import React from 'react';

const Tab = createBottomTabNavigator();

export default function TabBarNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen 
                name="HomeStack" component={ HomeStackScreen } 
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="home" size={24} color="black" />
                    )
                }}     
            />
        </Tab.Navigator>
    );
}