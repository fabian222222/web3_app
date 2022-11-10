import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './../../../Screens/Home/HomeScreen'
import WalletHeader from '../../../Components/Wallet/Header/WalletHeader'


const HomeStack = createNativeStackNavigator();

export default function HomeStackScreens() {
    return (
      <HomeStack.Navigator >
          <HomeStack.Screen 
            name="Home" 
            component={ HomeScreen } 
            options={{
              header: () => <WalletHeader title='Vous écoutez :' />,
            }}
        />        
      </HomeStack.Navigator>
    );
}