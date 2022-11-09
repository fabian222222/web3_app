import React from 'react'

import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { favArtistData } from '../../../DataMockup/Store/artist'
import { FavoriteArtist } from '../../../Interface/Store/FavoriteArtist'
import ArtistCover from './ArtistCover'



export function FavoriteArtists()  {
    return (
        <View style={ styles.favArtist }>
            <Text style={ styles.titleFavArtist }>Vos artistes préférés</Text>
            <View style={ styles.scroll }>
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





const styles = StyleSheet.create({
    favArtist: {
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
        width: '99%'
    }
})

