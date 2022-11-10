import React from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, View, Image, TouchableOpacity  } from "react-native"
import { colors } from '../../DesignSystem/Colors'
import { useRoute } from '@react-navigation/native';
import {  useNavigation } from "@react-navigation/native";
import { FavoriteArtist } from '../../Interface/Store/FavoriteArtist'

import { FamousArtistSong, ArtistAlbums } from '../../Components/Store/ArtistAndAlbum/ArtistStore'

export default function ArtistDetailScreen() {
    const { params: artistData } = useRoute() as {params: FavoriteArtist}
    let navigation = useNavigation();
    return (
        <SafeAreaView style={ styles.container }>
            <Image
                style={ styles.albumCover }
                source={require(`./../../../assets/images/store/bannerAlbum.png`)} 
            />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    
                    style={ styles.btnBack }
                    source={require(`./../../../assets/btnBack.png`)} 
                />
                <View style={ styles.artistTitle }>
                    <Text style={ styles.artistNameTitle }>{artistData.name}</Text>
                    <Text style={ styles.rate }>{artistData.rate} auditeurs</Text>
                </View>
            </TouchableOpacity>
            <FamousArtistSong/>
            <ArtistAlbums albums={ artistData.albums } />     
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: colors.backgroundBlueBlack,
    },
    albumCover: {
        position: 'absolute',
        width: '100%'
    },
    btnBack: {
        marginTop: 25,
        marginLeft: 20
    },
    artistTitle: {
        marginTop: 90,
        marginLeft: 20
    },
    artistNameTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
    },
    rate: {
        marginTop: 4,
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    }
})