import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsScreen from '../../../Screens/Settings/SettingsScreen'
import WalletHeader from '../../../Components/Wallet/Header/WalletHeader'
import SettingHistory from './../../../Screens/Wallet/WalletHistory'

const SettingsStack = createNativeStackNavigator();

export default function SettingsStackScreens() {
    return (
        <SettingsStack.Navigator >
            <SettingsStack.Screen name="Store"  options={{
                header: () => <WalletHeader title='Paramètres' />,
            }} component={ SettingsScreen } />

            <SettingsStack.Screen 
                name="SettingHistory" 
                options={{
                    header: () => <WalletHeader title="Historique d'écoute" />,
                }}
                component={ SettingHistory } 
            />
        </SettingsStack.Navigator>
    );
}