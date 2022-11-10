import React from 'react'
import {  useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, FlatList, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native'
import { favArtistData } from '../../../DataMockup/Store/artist'
import { newAlbumData } from '../../../DataMockup/Store/album'

import { FavoriteArtist } from '../../../Interface/Store/FavoriteArtist'
import { NewAlbum } from '../../../Interface/Store/NewAlbum'
import ArtistCover from './ArtistCover'
import AlbumCover from './AlbumCover'
import { FontAwesome } from '@expo/vector-icons';



export function FavoriteArtists()  {
    return (
        <View style={ stylesArtist.componentsContainer }>
            <Text style={ stylesArtist.titleFavArtist }>Vos artistes préférés</Text>
            <View style={ stylesArtist.listFav }>
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

export function BestSells() {
    return (
        <View style={ stylesBestSells.componentsContainer }>
            <Text style={ stylesBestSells.titleFavArtist }>Les meilleures ventes du moment</Text>
            <SafeAreaView>
                <View style={ stylesAlbum.scroll }>
                    <TouchableOpacity>
                        <View style={ stylesBestSells.item } >
                            <Image
                                style={ stylesBestSells.albumCover }
                                source={require(`./../../../../assets/images/albumCover/Frame5.png`)} 
                            />
                            <View style={ stylesBestSells.infoText }>
                                <Text style={ stylesBestSells.albumText }>Die,Die,Crucify</Text>
                                <Text style={ stylesBestSells.text }>5min:15s</Text>
                            </View>
                            <FontAwesome style={ stylesBestSells.playIcon } name="play" size={15} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
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
    listFav: {
        marginLeft: -10
    }
})

const stylesBestSells = StyleSheet.create({
    componentsContainer: {
        marginTop: 10,
        marginLeft: 20,
    },
    infoText: {
        marginLeft: -140
    },
    item: {
        margin: 5,
        marginLeft: 10,
        width: 350,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleFavArtist: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    scroll: {
        marginTop: 10,
        marginLeft: -10,
    },
    albumCover: {
        width: 62,
        height: 61,
        borderRadius: 12.2,
        alignItems: 'center'
    },
    playIcon: {
        marginLeft: 20
    },
    albumText: {
        lineHeight: 26,
        fontWeight: '500',
        color: 'white',
        fontSize: 16,
    },
    text: {
        fontSize: 14,
        color: 'white'
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
