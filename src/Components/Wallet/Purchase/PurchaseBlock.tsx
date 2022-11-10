import React from 'react'

import { View, StyleSheet, Image, Text } from 'react-native'

import { PurchaseList } from '../../../Interface/Wallet/PurchaseList'

const PurchaseBlock = ({album}: {album: PurchaseList}) => {
    return (
        <View style={styles.container} >
            <View style={styles.albumInfos} >
                <Image style={styles.image} source={ require(`./../../../../assets/images/albumCover/noLoveLost.jpg`) } />
                <View style={ styles.albumInfo } >
                    <Text style={ styles.artist } >{album.artist}</Text>
                    <Text style={ styles.nbrOfListen }>Nombre d'écoute: {album.nbrOfListen}</Text>
                </View>
            </View>
            <View style={styles.token} >
                <Text style={ styles.rate }>{album.rate}%</Text>
                <Text style={styles.remainingTime}>+1 dans {album.remainingTime}min</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        width: '100%',
        backgroundColor: 'rgba(165, 74, 255, .08)',
        padding: 10,
        borderRadius: 6
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 15,
        marginRight: 10
    },
    albumInfo: {
        justifyContent: 'space-between',
        paddingVertical: 4
    },
    artist: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    },
    nbrOfListen: {
        color: 'white'
    },
    token: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingVertical: 4
    },
    albumInfos: {
        flexDirection: 'row',
    },
    rate: {
        fontSize: 18,
    },
    remainingTime: {
        color: 'white',
        fontSize: 14
    }
})

export default PurchaseBlock