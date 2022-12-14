import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import { songs } from '../../../DataMockup/Wallet/songs'
import MostListenMusic from './MostLitsenMusic'

import { MostListen } from '../../../Interface/Wallet/MostListen'

const MostListenMusics = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                data={songs}
                renderItem={( {item}: {item: MostListen} ) => {
                    return (
                        <MostListenMusic music={item} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    }
})

export default MostListenMusics