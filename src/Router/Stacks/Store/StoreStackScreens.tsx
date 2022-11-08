import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StoreScreen from './../../../Screens/Store/StoreScreen'

const StoreStack = createNativeStackNavigator();

export default function StoreStackScreens() {
    return (
        <StoreStack.Navigator >
            <StoreStack.Screen name="Store" component={ StoreScreen } />
        </StoreStack.Navigator>
    );
}