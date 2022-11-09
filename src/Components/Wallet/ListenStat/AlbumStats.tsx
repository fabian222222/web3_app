import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'

import { AllListen } from '../../../Interface/Wallet/AllListen'

import AlbumBlock from './AlbumBlock'

const AlbumStats = ({ title, albums }: {title: string, albums: AllListen[]}) => {
    return (
        <View style={styles.statBlockContainer}>
            <Text style={styles.StatsTitle}>{ title }</Text>
            <FlatList 
                data={albums}
                renderItem={( {item}: {item: AllListen} ) => {
                    return (
                        <AlbumBlock album={item} />
                    )
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    statBlockContainer: {
        marginBottom: 30,
        backgroundColor: 'rgba(217, 217, 217, .06)',
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    StatsTitle: {
        color: 'white',
        fontSize: 22,
        marginBottom: 10
    }
})

export default AlbumStats