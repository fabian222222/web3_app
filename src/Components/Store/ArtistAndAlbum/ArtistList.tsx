import React from 'react'

import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { favArtistData } from '../../../DataMockup/Store/artist'
import { newAlbumData } from '../../../DataMockup/Store/album'

import { FavoriteArtist } from '../../../Interface/Store/FavoriteArtist'
import { NewAlbum } from '../../../Interface/Store/NewAlbum'
import ArtistCover from './ArtistCover'
import AlbumCover from './AlbumCover'



export function FavoriteArtists()  {
    return (
        <View style={ stylesArtist.componentsContainer }>
            <Text style={ stylesArtist.titleFavArtist }>Vos artistes préférés</Text>
            <View style={ stylesArtist.scroll }>
                <FlatList
                    horizontal={true}
                    data={favArtistData}
                    renderItem={( {item}: {item: FavoriteArtist} ) => {
                        return (
                            <ArtistCover artist={item} />
                        )
                    }}
                />
            </View>
        </View>
        
    )
}

export function NewAlbums() {
    return (
        <View style={ stylesAlbum.componentsContainer }>
            <Text style={ stylesAlbum.titleFavArtist }>Les nouveaux albums</Text>
            <View style={ stylesAlbum.scroll }>
                <FlatList
                    horizontal={true}
                    data={newAlbumData}
                    renderItem={( {item}: {item: NewAlbum} ) => {
                        return (
                            <AlbumCover album={item} />
                        )
                    }}
                />
            </View>
        </View>
    )
}



const stylesArtist = StyleSheet.create({
    componentsContainer: {
        marginTop: 10,
        marginLeft: 20,
    },
    titleFavArtist: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    scroll: {
        marginTop: 10,
        marginLeft: -10,
    }
})



const stylesAlbum = StyleSheet.create({
    componentsContainer: {
        marginTop: 10,
        marginLeft: 20,
    },
    titleFavArtist: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    scroll: {
        marginTop: 10,
        marginLeft: -10,
    }
})
