import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StoreScreen from './../../../Screens/Store/StoreScreen'
import ArtistDetailScreen from '../../../Screens/Store/ArtistDetailScreen'
import AlbumDetailScreen from '../../../Screens/Store/AlbumDetailScreen'
import SongDetailScreen from '../../../Screens/Store/SongDetailScreen'
import WalletHeader from '../../../Components/Wallet/Header/WalletHeader'


const StoreStack = createNativeStackNavigator();

export default function StoreStackScreens() {
    return (
        <StoreStack.Navigator >
            <StoreStack.Screen name="Store" options={{header: () => <WalletHeader title='Store'/>}} component={ StoreScreen } />
            <StoreStack.Screen name="ArtistDetail" options={{header: () => null}} component={ ArtistDetailScreen } />
            <StoreStack.Screen name="AlbumDetail" options={{header: () => null}} component={ AlbumDetailScreen } />
            <StoreStack.Screen name="SongDetail" options={{header: () => null}} component={ SongDetailScreen } />
        </StoreStack.Navigator>
    );
}