import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import { NewAlbum } from '../../../Interface/Store/NewAlbum'

const AlbumCover = ({album}: {album: NewAlbum}) => {
    return (
        <TouchableOpacity>
            <View style={ styles.container } >
                <Image
                    style={ styles.albumCover }
                    source={require(`./../../../../assets/images/albumCover/Album2.png`)} 
                />
                <View style={ styles.titlesContainer }>
                    <View>
                        <Text style={ styles.albumText } >{ album.name }</Text>
                        <Text style={ styles.rate } >{ album.lenght}</Text>
                    </View>
                    <FontAwesome style={ styles.playIcon } name="play" size={15} color="white" />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 175,
        height: 230,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titlesContainer: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 157,
        alignItems: 'center',
    },
    albumCover: {
        width: 157,
        height: 157,
        alignItems: 'center'
    },
    playIcon: {
        marginRight: 10
    },
    albumText: {
        lineHeight: 26,
        fontWeight: '500',
        color: 'white',
        fontSize: 16,
    },
    rate: {
        lineHeight: 25,
        color: 'white',
        fontSize: 14
    }
})

export default AlbumCover