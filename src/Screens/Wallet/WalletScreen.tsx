import React from 'react'

import { SafeAreaView, StyleSheet, Text, Button } from 'react-native'

const WalletScreen = ( {navigation} ) => {
    return (
        <SafeAreaView style={ styles.container }>
            <Text>This is my wallet page</Text>
            <Button 
                title='Go to history page'
                onPress={() => {
                    navigation.navigate('WalletHistory')
                }}
            />
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

export default WalletScreen