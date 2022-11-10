import React from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, View, Image, TouchableOpacity  } from "react-native"
import { colors } from '../../DesignSystem/Colors'
import { useRoute } from '@react-navigation/native';
import {  useNavigation } from "@react-navigation/native";
import { Album } from '../../Interface/Store/FavoriteArtist'

import { AlbumSelected } from '../../Components/Store/ArtistAndAlbum/ArtistStore'

export default function ArtistDetailScreen() {
    const { params: album } = useRoute() as {params: Album}
    let navigation = useNavigation();
    console.log(album.artistName);
    
    return (
        <SafeAreaView style={ styles.container }>
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
            <AlbumSelected/>
        </SafeAreaView>
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