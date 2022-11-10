import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import {  useNavigation } from "@react-navigation/native";
import { FavoriteArtist } from '../../../Interface/Store/FavoriteArtist'

const ArtistCover = ({artist}: {artist: FavoriteArtist}) => {
    let navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate<{}>('ArtistDetail', artist ) }>
            <View style={ styles.container } >
                <Image
                    style={ styles.albumCover }
                    source={require(`./../../../../assets/images/albumCover/noLoveLost.jpg`)} 
                />
                <View style={ styles.titles }>
                    <Text style={ styles.albumText } >{ artist.name }</Text>
                    <Text style={ styles.rate } >{ artist.rate}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 160,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titles: {
        alignItems: 'center',
        marginTop: 5,
        height: 40,

    },
    albumCover: {
        width: 101,
        height: 101,
        borderRadius: 12.5,
        alignItems: 'center'
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

export default ArtistCover