import React from 'react';

import { StyleSheet, TextInput, View, ScrollView, Text   } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { FavoriteArtists, NewAlbums, BestSells }  from '../../Components/Store/ArtistAndAlbum/ArtistList'
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
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundBlueBlack,
    },
    searchIcon: {
        position: 'absolute',
        right: 30,
        zIndex: 1,
        color: '#A54AFF',
        fontSize: 24
    },
    input: {
        width: '90%',
        borderRadius: 12.2,
        borderColor: 'rgba(165, 74, 255, 0.3)',
        backgroundColor: 'rgba(165, 74, 255, 0.3)',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

})