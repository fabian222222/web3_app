import React from 'react';

import { SafeAreaView, Text, StyleSheet } from "react-native"

export default function StoreDetailScreen() {
    return (
        <SafeAreaView style={ styles.container }>
            <Text>This is my store detail section</Text>
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