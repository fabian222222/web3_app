import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

const Music = () => {
    return (
        <View style={ styles.container } >
            <Image
                style={ styles.albumCover }
                source={require(`./../../../../assets/images/albumCover/noLoveLost.jpg`)} 
             />
             <View style={ styles.albumTextes } >

                    <Text style={ [styles.albumText, styles.albumTitle] } >Song name - Artist</Text>
                <Text style={ styles.albumText } >Duration session token : 2</Text>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        marginVertical: 10,
        flexDirection: 'row'
    },
    albumCover: {
        width: 70,
        height: 70,
        borderRadius: 15,
        marginRight: 15
    },
    albumTextes: {
        flex: 1,
        justifyContent: 'space-between'
    },
    albumText: {
        color: 'white',
        fontSize: 16
    },
    rate: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    albumTitle: {
        fontSize: 22,
        fontWeight: '600'
    }
})

export default Music