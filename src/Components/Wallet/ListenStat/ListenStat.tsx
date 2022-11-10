import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { songs } from '../../../DataMockup/Wallet/ListenAllSongs'

import AlbumStats from './AlbumStats'
import DailyStat from './DailyStat'

import { Dimensions } from "react-native"
import { LineChart } from "react-native-chart-kit"

const ListenStat = () => {

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 1,
        color: () => 'white',
        strokeWidth: 2, 
        useShadowColorFromDataset: false 
    };    

    const screenWidth = Dimensions.get("window").width;

    const data = {
        labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
        datasets: [
          {
            data: [3, 12, 6, 9, 6, 12, 15],
            color: () => `white`,
            strokeWidth: 2 
          }
        ],
    };

    return (
        <ScrollView style={styles.container}>
           <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                withDots={false}
                withInnerLines={false}
            />
            <AlbumStats title='Albums les + écoutés' albums={songs} />
            <AlbumStats title='Titres les + écoutés' albums={songs} />
            <DailyStat />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    }
})

export default ListenStat