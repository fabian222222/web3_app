import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

const Music = () => {
    return (
        <View style={ styles.music } >
            <Image
                style={ styles.albumCover }
                source={require(`./../../../assets/images/albumCover/album7.png`)} 
             />
             <View style={ styles.albumTextes } >
                <Text style={ [styles.albumText, styles.albumTitle] } >Name of the song - Artist</Text>
                <Text style={ styles.albumText } >Session : 20 min sur Spotify</Text>
             </View>

             <View style={{ display: 'flex', flexDirection:'column', justifyContent: 'space-between', paddingVertical: 4}}>
                <View style={{ display: 'flex', flexDirection:'row', alignItems: 'center',}}>
                    <Image source={require('../../../assets/token-yellow.png')} />
                    <Text style={ styles.albumText }> 32</Text>
                </View>
              <Text style={ styles.albumText }><Text  style={{ fontWeight: '700'}}>+1 </Text> (5 min)</Text>

             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    music: {
        width: '100%',
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#2D293B',
    },
    albumCover: {
        width: 60,
        height: 60,
        marginRight: 10
    },
    albumTextes: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 4
    },
    albumText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '300'

    },
    rate: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    albumTitle: {
        fontSize: 16,
        fontWeight: '500'
    }
})

export default Music