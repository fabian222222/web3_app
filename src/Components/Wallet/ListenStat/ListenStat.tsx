import React from 'react'
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { songs } from '../../../DataMockup/Wallet/ListenAllSongs'

import AlbumStats from './AlbumStats'
import DailyStat from './DailyStat'

import { Dimensions } from "react-native"
import { LineChart } from "react-native-chart-kit"

const ListenStat = () => {

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

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.statContainer}>
                <LineChart
                    data={data}
                    width={screenWidth - 40}
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
        marginBottom: 20,
        borderRadius: 10
    }
})

export default ListenStat