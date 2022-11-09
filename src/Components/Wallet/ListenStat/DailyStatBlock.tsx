import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

type Props = {
    borderBottomTheme: string,
    text: string,
    stat: number,
}

const DailyStatBlock = ({borderBottomTheme, text, stat}: Props) => {
    return (
        <View>
            <View style={[styles.container, {borderBottomColor: borderBottomTheme}]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 10,
        borderBottomWidth: 30,
    }
})

export default DailyStatBlock