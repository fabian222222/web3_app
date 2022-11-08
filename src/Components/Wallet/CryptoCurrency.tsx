import React from 'react'

import { SafeAreaView, StyleSheet, Text } from 'react-native'

const CryptoCurrency = () => {
    return (
        <SafeAreaView style={ styles.container }>
            <Text>This is my crypto component</Text>
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

export default CryptoCurrency