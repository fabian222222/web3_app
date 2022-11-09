import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import HomeStackScreen from './../Screens/Home/HomeScreen'
import SearchScreen from './../Screens/Search/SearchScreen'
import SettingsScreen from './../Screens/Settings/SettingsScreen'
import WalletScreen from './../Router/Stacks/Wallet/WalletStackScreens'
import StoreStackScreens from './../Router/Stacks/Store/StoreStackScreens'

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
            <Tab.Screen 
                name="StoreStack" component={ StoreStackScreens } 
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="shopping-basket" size={24} color="black" />
                    )
                }}     
            />
             
             <Tab.Screen 
                name="SearchStack" component={ SearchScreen } 
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="search" size={24} color="black" />
                    )
                }}     
            />
            <Tab.Screen 
                name="WalletStack" component={ WalletScreen } 
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="money" size={24} color="black" />
                    )
                }}     
            />
            <Tab.Screen 
                name="SettingsStack" component={ SettingsScreen } 
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="gear" size={24} color="black" />
                    )
                }}     
            />
        </Tab.Navigator>
    );
}