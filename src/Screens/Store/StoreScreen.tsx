import React from 'react'

import { SafeAreaView, StyleSheet, Text, Button } from 'react-native'

const StoreScreen = ({navigation}) => {
    return (
        <SafeAreaView style={ styles.container }>
            <Text>This is my wallet page</Text>
            <Button 
                title='Go to store detail page'
                onPress={() => {
                    navigation.navigate('StoreDetail')
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

export default StoreScreen