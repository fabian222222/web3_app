import React, { useState } from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'

import DailyStatBlock from './DailyStatBlock'

const DailyStat = () => {

    const BEFORE_YESTERDAY = 'avant hier'
    const YESTERDAY = 'hier'
    const TODAY = "aujourd'hui"

    const [day, setDay] = useState(BEFORE_YESTERDAY)

    return (
        <View style={styles.container}>
            <View style={styles.dayContainer}>
                <Pressable onPress={() => {
                    setDay(BEFORE_YESTERDAY)
                }}
                style={ day === BEFORE_YESTERDAY ? styles.dayPressContainer : styles.dayUnpressContainer}
                >
                    <Text style={styles.day}>Avant hier</Text>
                </Pressable>
                <Pressable onPress={() => {
                    setDay(YESTERDAY)
                }}
                style={ day === YESTERDAY ? styles.dayPressContainer : styles.dayUnpressContainer}
                >
                    <Text style={styles.day}>Hier</Text>
                </Pressable>
                <Pressable onPress={() => {
                    setDay(TODAY)
                }}
                style={ day === TODAY ? styles.dayPressContainer : styles.dayUnpressContainer}
                >
                    <Text style={styles.day}>Aujourd'hui</Text>
                </Pressable>
            </View>
            <View style={styles.statsContainer}>
                <DailyStatBlock borderBottomTheme='#ED4E55' stat={20} text='daily token' />
                <DailyStatBlock borderBottomTheme='#B90885' stat={20} text='total token' />
                <DailyStatBlock borderBottomTheme='#27BD5C' stat={20} text='daily listen' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20
    },
    dayContainer: {
        paddingHorizontal: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    day: {
        color: 'white',
        fontSize: 18,
        paddingHorizontal: 5
    },
    dayPressContainer: {
        borderBottomWidth: 2,
        borderColor: '#A54AFF',
        paddingBottom: 5,
    },
    dayUnpressContainer: {
    },
    statsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 15
    }
})

export default DailyStat