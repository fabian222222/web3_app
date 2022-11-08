import React from 'react'

import { SafeAreaView, StyleSheet, Text } from 'react-native'

const StoreScreen = () => {
    return (
        <SafeAreaView style={ styles.container }>
            <Text>This is my Store page</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default StoreScreen