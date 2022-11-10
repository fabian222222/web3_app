import React from 'react';

import { SafeAreaView, Text, StyleSheet } from "react-native"

export default function SettingScreen() {
    return (
        <SafeAreaView style={ styles.container }>
            <Text>My settings</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})