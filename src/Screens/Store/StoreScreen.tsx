import React from 'react';

import { StyleSheet, TextInput, View, ScrollView, Text   } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { FavoriteArtists, NewAlbums, BestSells }  from '../../Components/Store/ArtistAndAlbum/ArtistList'
import Music from '../../Components/Home/Music'
import { colors } from '../../DesignSystem/Colors'
export default function StoreDetailScreen() {
    return (
        <ScrollView style={ styles.container }>
            <View style={styles.searchSection}>
                <Ionicons style={styles.searchIcon} name="ios-search" size={32} color="green" />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="white"
                    placeholder="Rechercher un artiste, une musique..."
                />
            </View>
            <FavoriteArtists/>
            <NewAlbums/>
            <BestSells/>
            <Music />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: colors.backgroundBlueBlack,
    },
    header: {
        marginTop: 30,
        marginLeft: 20,
        height: 40,
    },
    title: {
        width: '100%',
        fontSize: 20,
        fontWeight: '700',
        color: 'white'
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#23262B',
    },
    searchIcon: {
        position: 'absolute',
        right: 30,
        zIndex: 1,
        color: '#A54AFF',
        fontSize: 24
    },
    input: {
        fontSize:13,
        backgroundColor:'rgba(164, 74, 255, 0.3)',
        width: '90%',
        color:'white',
        borderRadius: 12.2,
        borderColor: 'rgba(164, 74, 255, 0.3)',
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

})