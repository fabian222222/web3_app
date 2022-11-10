import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import { MostListen } from '../../../Interface/Wallet/MostListen'

const MostListenMusic = ({music}: {music: MostListen}) => {

    const upArrow = require('./../../../../assets/up.png')
    const downArrow = require('./../../../../assets/down.png')
    const yellowNote = require('./../../../../assets/note-yellow.png')

    return (
        <View style={ styles.container } >
            <View style={styles.albumInfos} >
                <Image style={styles.image} source={ music.songImage } />
                <View style={ styles.albumInfo } >
                    <Text style={ styles.artist } >{music.singer}</Text>
                    <Text style={ styles.nbrOfListen }>Nombre d'écoute: {music.listenCounter}</Text>
                </View>
            </View>
            <View style={styles.token} >
                <View style={styles.rateContainer} >
                    {
                        music.rating > 0 && 
                        <Image source={upArrow} />
                    }
                    {
                        music.rating < 0 && 
                        <Image source={downArrow} /> 
                    }
                    <Text style={ music.rating > 0 ? [styles.rate, styles.rateGreen] : [styles.rate, styles.rateRed] }>{music.rating}%</Text>
                </View>
                <View style={styles.userTokenContainer} >
                    <Text style={styles.userTokenText}>37</Text>
                    <Image source={ yellowNote } />
                </View>
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
        marginLeft: 5
    },
    rateGreen: {
        color: '#00FF5A'
    },
    rateRed: {
        color: '#FF0000'
    },
    userTokenText: {
        color: 'white',
        fontSize: 16,
        marginRight: 6
    },
    userTokenContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    }
})

export default MostListenMusic