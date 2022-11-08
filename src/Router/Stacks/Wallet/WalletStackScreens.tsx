import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WalletScreen from './../../../Screens/Wallet/WalletScreen'
import WalletHistory from './../../../Screens/Wallet/WalletHistory'

const HomeStack = createNativeStackNavigator();

export default function UsersStack() {
    return (
        <HomeStack.Navigator >
            <HomeStack.Screen name="Wallet" component={ WalletScreen } />
            <HomeStack.Screen name="WalletHistory" component={ WalletHistory } />
        </HomeStack.Navigator>
    );
}