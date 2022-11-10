import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WalletScreen from './../../../Screens/Wallet/WalletScreen'

import WalletHeader from '../../../Components/Wallet/Header/WalletHeader'

const HomeStack = createNativeStackNavigator();

export default function UsersStack() {
    return (
        <HomeStack.Navigator >
            <HomeStack.Screen 
                name="Wallet" 
                component={ WalletScreen } 
                options={{
                    header: () => <WalletHeader title='Mes achats' />,
                }}
            />
        </HomeStack.Navigator>
    );
}