import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StoreScreen from './../../../Screens/Store/StoreScreen'
import ArtistDetailScreen from '../../../Screens/Store/ArtistDetailScreen'

const StoreStack = createNativeStackNavigator();

export default function StoreStackScreens() {
    return (
        <StoreStack.Navigator >
            <StoreStack.Screen name="Store" options={{header: () => null}} component={ StoreScreen } />
            <StoreStack.Screen name="ArtistDetail" options={{header: () => null}} component={ ArtistDetailScreen } />
        </StoreStack.Navigator>
    );
}