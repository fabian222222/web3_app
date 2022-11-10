import React from 'react'
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native'
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
        strokeWidth: 2, // optional, default 3
        useShadowColorFromDataset: false // optional
    };    

    const screenWidth = Dimensions.get("window").width;

    const data = {
        labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
        datasets: [
          {
            data: [3, 12, 6, 9, 6, 12, 15],
            color: () => `white`,
            strokeWidth: 2 // optional
          }
        ],
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.statContainer}>
            <LineChart
                    data={data}
                    width={screenWidth - 20}
                    height={220}
                    chartConfig={chartConfig}
                    withDots={false}
                    withInnerLines={false}
                    style={styles.chart}
                    />
                <AlbumStats title='Albums les + écoutés' albums={songs} />
                <AlbumStats title='Titres les + écoutés' albums={songs} />
                <DailyStat />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statContainer: {
        paddingHorizontal: 20
    },
    chart: {
        marginLeft: -20,
        marginBottom: 20
    }
})

export default ListenStat