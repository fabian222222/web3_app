import React from 'react';

import { SafeAreaView, Text, StyleSheet, TextInput, View  } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { FavoriteArtist }  from '../../Components/Store/ArtistList'
export default function StoreDetailScreen() {
    return (
        <SafeAreaView style={ styles.container }>
            <View style={styles.searchSection}>
                <Ionicons style={styles.searchIcon} name="ios-search" size={32} color="green" />
                <TextInput
                    style={styles.input}
                    placeholder="Rechercher un artiste, une musique..."
                    keyboardType="numeric"
                />
            </View>
                <FavoriteArtist/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white',
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        position: 'absolute',
        right: 30,
        zIndex: 1,
        color: '#A6A6A6',
        fontSize: 24
    },
    input: {
        width: '90%',
        borderRadius: 12.2,
        borderColor: '#D9D9D9',
        backgroundColor: '#D9D9D9',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

})