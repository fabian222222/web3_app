import React from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, View, Image, TouchableOpacity  } from "react-native"
import { colors } from '../../DesignSystem/Colors'
import { useRoute } from '@react-navigation/native';
import {  useNavigation } from "@react-navigation/native";
import { Album } from '../../Interface/Store/FavoriteArtist'

import { AlbumSelected } from '../../Components/Store/ArtistAndAlbum/ArtistStore'
import { AlbumTitles } from '../../Components/Store/ArtistAndAlbum/AlbumCover'
import Music from '../../Components/Home/Music';

export default function ArtistDetailScreen() {
    const { params: album } = useRoute() as {params: Album}
    let navigation = useNavigation();
    
    return (
        <View style={ styles.container }>
            <View >
                <Image style={ styles.header }
                    source={require(`./../../../assets/images/store/bannière.png`)} 
                />
                <View style={ styles.headerTitle }>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            style={ styles.btnBack }
                            source={require(`./../../../assets/btnBack.png`)} 
                        />
                    </TouchableOpacity>
                    <Text style={ styles.headerTitleName }>{album.artistName}</Text>
                </View >
            </View>
            <AlbumSelected buy={"Acheter l'album"} albumName={album.albumName}/>
            <AlbumTitles song={album.song}/>
            <View style={styles.music}>
                <Music />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: colors.backgroundBlueBlack,
    },
    music: {
        position: 'absolute',
        width: '100%',
        bottom: 0
    },
    header: {
        top: 0,
        height: 75,
        width: '100%',
        position: 'absolute',
    },
    headerTitle: {
        marginTop: 30,
        height: 40,
        width: 160,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnBack: {
        marginLeft: 20,
    },
    headerTitleName: {
        color: 'white',
        marginLeft: 10,
        fontSize: 20,
        fontWeight: '700'
    }
    
})