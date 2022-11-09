import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import { AllListen } from '../../../Interface/Wallet/AllListen'

const AlbumBlock = ({album}: {album: AllListen}) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={require(`./../../../../assets/images/albumCover/noLoveLost.jpg`)} 
            />
            <Text style={styles.albumTitle}>{album.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 20
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 20,
    },
    albumTitle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        marginTop: 5
    }
})

export default AlbumBlock