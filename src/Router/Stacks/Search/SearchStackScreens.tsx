import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from '../../../Screens/Search/SearchScreen';
import WalletHeader from '../../../Components/Wallet/Header/WalletHeader'

const SettingsStack = createNativeStackNavigator();

export default function SettingsStackScreens() {
    return (
        <SettingsStack.Navigator >
            <SettingsStack.Screen name="Store"  options={{
                    header: () => <WalletHeader title='Recherche' />,
                }} component={ SearchScreen } />
        </SettingsStack.Navigator>
    );
}