import React from 'react'

import { View, StyleSheet, Text } from 'react-native'

const favArtistData = [
    {
        img: '',
        name: 'Artiste name',
        taux: 'taux écoute'
    },
    {
        img: '',
        name: 'Artiste name',
        taux: 'taux écoute'
    },
    {
        img: '',
        name: 'Artiste name',
        taux: 'taux écoute'
    },
    {
        img: '',
        name: 'Artiste name',
        taux: 'taux écoute'
    },    {
        img: '',
        name: 'Artiste name',
        taux: 'taux écoute'
    }
]


export function FavoriteArtist()  {
    return (
        <View style={ styles.favArtist }>
            <Text style={ styles.titleFavArtist }>Vos artistes préférés</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    favArtist: {
        marginLeft: 20,
    },
    titleFavArtist: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

