import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

type Props = {
    borderBottomTheme: string,
    text: string,
    textColor: string,
    image: string
}

const DailyStatBlock = ({borderBottomTheme, text, textColor, image}: Props) => {
    return (
        <View>
            <View style={[styles.container, {backgroundColor: borderBottomTheme}]}>
                <Image style={styles.image} source={ image } />
                <Text style={ { color: textColor, fontSize: 18 } } >{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 30,
        height: 30,
        marginBottom: 10
    }
})

export default DailyStatBlock