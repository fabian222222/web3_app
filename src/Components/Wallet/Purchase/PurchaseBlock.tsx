import React from 'react'

import { View, StyleSheet, Image, Text } from 'react-native'

import { PurchaseList } from '../../../Interface/Wallet/PurchaseList'

const PurchaseBlock = ({album}: {album: PurchaseList}) => {

    const upArrow = require('./../../../../assets/up.png')
    const downArrow = require('./../../../../assets/down.png')

    return (
        <View style={styles.container} >
            <View style={styles.albumInfos} >
                <Image style={styles.image} source={ album.albumCover } />
                <View style={ styles.albumInfo } >
                    <Text style={ styles.artist } >{album.artist}</Text>
                    <Text style={ styles.nbrOfListen }>Nombre d'écoute: {album.nbrOfListen}</Text>
                </View>
            </View>
            <View style={styles.token} >
                <View style={styles.rateContainer} >
                    {
                        album.rate > 0 && 
                        <Image source={upArrow} />
                    }
                    {
                        album.rate < 0 && 
                        <Image source={downArrow} /> 
                    }
                    <Text style={ album.rate > 0 ? [styles.rate, styles.rateGreen] : [styles.rate, styles.rateRed] }>{album.rate}%</Text>
                </View>
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
    rateContainer: {
        flexDirection: 'row',
        alignItems: 'center'
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
        marginLeft: 10
    },
    rateGreen: {
        color: '#00FF5A'
    },
    rateRed: {
        color: '#FF0000'
    },
    remainingTime: {
        color: 'white',
        fontSize: 14
    }
})

export default PurchaseBlock