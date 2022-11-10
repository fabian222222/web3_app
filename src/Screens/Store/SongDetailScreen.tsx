import React from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, View, Image, TouchableOpacity  } from "react-native"
import { colors } from '../../DesignSystem/Colors'
import { useRoute } from '@react-navigation/native';
import {  useNavigation } from "@react-navigation/native";
import { Song } from '../../Interface/Store/FavoriteArtist'
import Music from '../../Components/Home/Music'
import { AlbumSelected } from '../../Components/Store/ArtistAndAlbum/ArtistStore'
import { AlbumTitles } from '../../Components/Store/ArtistAndAlbum/AlbumCover'
import { Dimensions } from "react-native"
import { LineChart } from "react-native-chart-kit"

const chartConfig = {
    backgroundGradientFrom: "rgba(165, 74, 255, .08)",
    backgroundGradientFromOpacity: .1,
    backgroundGradientTo: "rgba(165, 74, 255, .08)",
    backgroundGradientToOpacity: .1,
    color: () => 'white',
    strokeWidth: 2, 
    useShadowColorFromDataset: false 
};    

const screenWidth = Dimensions.get("window").width;

const data = {
    labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    datasets: [
      {
        data: [3, 12, 6, 9, 6, 12, 15],
        color: () => `white`,
        strokeWidth: 2 
      }
    ],
};

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
            <Text style={styles.rate}>Taux d’écoute pour cette musique</Text>
            <LineChart
                    data={data}
                    width={screenWidth - 40}
                    height={220}
                    chartConfig={chartConfig}
                    withDots={false}
                    withInnerLines={false}
                    style={styles.stat}
                />
            <View  style={styles.music}>
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
    rate: {
        color: 'white',
        fontWeight:'700',
        fontSize: 20,
        marginLeft: 20,
        marginTop: 15,
    },
    stat: {
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10
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