import React from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, View, Image, TouchableOpacity  } from "react-native"
import { colors } from '../../DesignSystem/Colors'
import { useRoute } from '@react-navigation/native';
import {  useNavigation } from "@react-navigation/native";
import { Song } from '../../Interface/Store/FavoriteArtist'

import { AlbumSelected } from '../../Components/Store/ArtistAndAlbum/ArtistStore'
import { AlbumTitles } from '../../Components/Store/ArtistAndAlbum/AlbumCover'

export default function SongDetailScreen() {
    const { params: songData } = useRoute() as {params: Song}
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
                    <Text style={ styles.headerTitleName }>{songData.name}</Text>
                </View >
            </View>
            <AlbumSelected buy={"Acheter le single"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: colors.backgroundBlueBlack,
    },
    header: {
        height: 75,
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