import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBarNavigator from "./src/Router/TabBarNavigator";

export default function App() {

    const RootStack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }} >
                
                <RootStack.Group>
                    <RootStack.Screen name="TabBar" component={TabBarNavigator} />
                </RootStack.Group>

            </RootStack.Navigator>
        </NavigationContainer>
    );
}
