import React from 'react';

import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native"

export default function HomeScreen() {
    return (
        <View style={ styles.container }>
            <View> 
                <View>
                    <View style={{display: 'flex', justifyContent: 'space-between', flexDirection:'row', alignItems: 'center'}}>   
                        <Text style={ styles.title }>Vous écoutez : </Text>
                        <View style={ styles.tokens }>
                            <View style={ styles.token }>
                                <Text style={ styles.songText }>37 </Text>
                                <Image source={require('../../../assets/note-yellow.png')} />
                            </View>
                            <View style={ styles.token }>
                                <Text style={ styles.songText }>15 </Text>
                                <Image source={require('../../../assets/note-blue.png')} />
                            </View>
                        </View>
                    </View> 
                    <View style={{display: 'flex', justifyContent: 'space-around', flexDirection:'row', marginVertical: 20, alignItems: 'center'}}>
                        <View style={ styles.albumCover }>
                            <Image source={require('../../../assets/spotify.png')} />
                        </View>
                        <View>
                            <Text style={ styles.songTitle }>Song name - Artist</Text>
                            <Text style={ styles.songText }>Votre session en cours : 54 min 56 sec </Text>
                        </View>
                    </View>
                </View>
                <View></View>
            </View>





            <Text style={ styles.title }>Résumé</Text>
            <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection:'row', marginVertical: 20}}>
                <View style={ styles.blockToken }>
                    <Text style={ styles.title }>Token Artiste</Text>
                    <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection:'row', alignItems: 'center'}}>
                        <Image source={require('../../../assets/token-yellow.png')} />
                        <Text style={ styles.songText }> 32</Text>
                    </View>
                    <Text style={ styles.songText }><Text  style={{ fontSize: 20,}}>+1 </Text> dans 25 min</Text>
                </View>
                <View style={ styles.blockToken }>
                    <Text style={ styles.title }>Token Global</Text>
                    <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection:'row',  alignItems: 'center'}}>
                        <Image source={require('../../../assets/token-blue.png')} />
                        <Text style={ styles.songText }> 32</Text>
                    </View>
                    <Text style={ styles.songText }><Text  style={{ fontSize: 20,}}>+1 </Text> dans 1 h</Text>
                </View>
            </View>

            





            <Text style={ styles.title }>Historique d'écoute</Text>
            <View style={{ display: 'flex', justifyContent: 'space-between', marginVertical: 20}}>
                <View style={ styles.blockSong }>
                    <Image
                        style={ styles.albumCover }
                        source={require('../../../assets/images/albumCover/album1.png')} 
                    />
                    <View>
                        <Text style={ styles.songTitle }>Song name - Artist</Text>
                        <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Text style={ styles.songText }>Duration session </Text>
                            <Text style={ styles.songText }> token: 20</Text>
                        </View>
                    </View>
                    <Image
                        // style={ styles.albumCover }
                        source={require('../../../assets/spotify.png')} 
                    />
                </View>
                <View style={ styles.blockSong }>
                    <Image
                        style={ styles.albumCover }
                        source={require(`../../../assets/images/albumCover/album2.png`)} 
                    />
                     <View>
                        <Text style={ styles.songTitle }>Song name - Artist</Text>
                        <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Text style={ styles.songText }>Duration session </Text>
                            <Text style={ styles.songText }> token: 20</Text>
                        </View>
                    </View>
                    <Image
                        // style={ styles.albumCover }
                        source={require('../../../assets/apple.png')} 
                    />
                </View>
                <View style={ styles.blockSong }>
                    <Image
                        style={ styles.albumCover }
                        source={require(`../../../assets/images/albumCover/album3.png`)} 
                    />
                    <View>
                        <Text style={ styles.songTitle }>Song name - Artist</Text>
                        <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Text style={ styles.songText }>Duration session </Text>
                            <Text style={ styles.songText }> token: 20</Text>
                        </View>
                    </View>
                    <Image
                        // style={ styles.albumCover }
                        source={require('../../../assets/youtube.png')} 
                    />
                </View>
            </View>


            <Text style={ styles.title }>Comment ça fonctionne ?</Text>
            <View style={ styles.button }>
                <Text style={ styles.title }>Voir les explications</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#23262B',
        paddingHorizontal: 20,
        paddingTop: 60
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#FFFFFF',
    },
    blockToken: {
        backgroundColor: '#2D293B',
        borderRadius: 12,
        width: 165,
        height: 92,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column'
    },
    blockSong: {
        backgroundColor: '#2D293B',
        borderRadius: 12,
        width: '100%',
        height: 70,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 5
    },
    albumCover: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#2D293B',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    blockApp: {
        width: 50,
        height: 50,
        borderRadius: 15,
        marginRight: 15,
        backgroundColor: '#FFFFFF'
    },
    songTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    },
    songText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '300',
    },
    button: {
        backgroundColor: '#4A316A',
        borderRadius: 12,
        width: '100%',
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    tokens: {
        backgroundColor: '#2D293B',
        borderRadius: 12,
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#4A316A',
        width: '36%',
        height: 33
    },
    token: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    }
})