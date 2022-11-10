import React from 'react'
import {  useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, FlatList, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native'
import { favArtistData } from '../../../DataMockup/Store/artist'
import { newAlbumData } from '../../../DataMockup/Store/album'

import { FavoriteArtist, Album } from '../../../Interface/Store/FavoriteArtist'
import { NewAlbum } from '../../../Interface/Store/NewAlbum'

import ArtistCover from './ArtistCover'
import AlbumCover from './AlbumCover'
import { FontAwesome } from '@expo/vector-icons';


const AlbumOfArtist = ({album}: {album: Album}) => {
    let navigation = useNavigation();
    return(
        <TouchableOpacity>
            <View style={ stylesAlbum.item }>
                <Image
                    style={stylesAlbum.logo}
                    source={require(`./../../../../assets/images/store/albumStore.png`)} 
                />
                <View style={stylesAlbum.albumData}>
                    <View>
                        <Text style={stylesAlbum.albumDataName}>{album.albumName}</Text>  
                        <Text style={stylesAlbum.albumDataLenght}>{album.albumLenght}</Text>  
                    </View>
                    <Image
                        source={require(`./../../../../assets/eye.png`)} 
                />
                </View>
            </View>
        </TouchableOpacity>
    )
}


export function FamousArtistSong()  {
    return (
        <View style={ stylesSong.componentsContainer }>
            <Text style={ stylesSong.titleFavArtist }>Populaires</Text>
            <SafeAreaView>
                <View style={ stylesBestSells.famousSong }>
                    <TouchableOpacity>
                        <View style={ stylesBestSells.item } >
                            <Image
                                style={ stylesBestSells.albumCover }
                                source={require(`./../../../../assets/images/store/bannerSong.png`)} 
                            />
                            <View style={ stylesBestSells.infoText }>
                                <View style={ stylesBestSells.data }>
                                    <Text style={ stylesBestSells.albumText }>Fadd</Text>
                                    <Text style={ stylesBestSells.text }>Nombre d’écoute : Nombre d’écoute</Text>
                                </View>
                                <Image
                                    style={ stylesBestSells.playIcon }
                                    source={require(`./../../../../assets/eye2.png`)} 
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
        
    )
}


export function ArtistAlbums({albums}: Pick<FavoriteArtist, 'albums'>)  {
    
    return (
        <View style={ stylesAlbum.componentsContainer }>
            <Text style={ stylesAlbum.titleAlbumSection }>Albums</Text>
            <View style={ stylesAlbum.grid }>
                <FlatList
                    data={albums}
                    numColumns={3}
                    columnWrapperStyle={{ flex: 1, justifyContent: 'space-between' }}
                    renderItem={( {item}: {item: Album} ) => {
                        return (
                            <AlbumOfArtist album={item} />
                        )
                    }}
                />
            </View>
        </View>
        
    )
}

const stylesSong = StyleSheet.create({
    componentsContainer: {
        marginTop: 10,
        marginLeft: 20,
    },
    titleFavArtist: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 30,
        height: 40,
        color: 'white'
    },

})

const stylesAlbum = StyleSheet.create({
    componentsContainer: {
        marginTop: -10,
        marginLeft: 20,
    },
    grid: {
        width: '95%'
    },
    titleAlbumSection: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 30,
        height: 40,
        color: 'white'
    },
    item: {
        height: 160,
    },
    logo: {
        height: 101,
        width: 101
    },
    albumData: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    albumDataName: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500'
    },
    albumDataLenght: {
        fontSize: 14,
        color: 'white',
        fontWeight: '300'
    }

})



const stylesBestSells = StyleSheet.create({
    componentsContainer: {
        marginTop: 10,
        marginLeft: 20,

    },
    infoText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    data: {
        width: 240,
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
    famousSong: {
        marginTop: 10,
        marginLeft: -10,
        padding: 5,
        width: 370,
        borderRadius: 12.2,
        backgroundColor: 'rgba(165, 74, 255, 0.08)'
    },
    albumCover: {
        width: 62,
        height: 61,
        borderRadius: 12.2,
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
    text: {
        fontSize: 14,
        color: 'white'
    }
})