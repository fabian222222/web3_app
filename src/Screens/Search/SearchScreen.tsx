import React from 'react';

import { SafeAreaView, Text, StyleSheet, TextInput, View, Button ,Alert, Pressable } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons'; 

export default function SearchScreen() {
    return (
        <SafeAreaView style={ styles.container }>
            <View style={styles.searchSection}>
                <Ionicons style={styles.searchIcon} name="ios-search" size={32} color="green" />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="white"
                    placeholder="Rechercher un artiste, une musique..."
                />
            </View>

            <Text style={styles.title}>Recherches Populaires</Text>
            <View style={styles.recommended}>
            <Pressable style={styles.popular} >
            <Text style={styles.popit} >Lil Nas X</Text>
            </Pressable>
            <Pressable style={styles.popular} >
            <Text style={styles.popit}>Montero</Text>
            </Pressable>
            <Pressable style={styles.popular} >
            <Text style={styles.popit}>Family Ties (baby keem)</Text>
            </Pressable>
            <Pressable style={styles.popular} >
            <Text style={styles.popit}>The Northern Boys</Text>
            </Pressable>
            <Pressable style={styles.popular} >
            <Text style={styles.popit}>I/ME/MYSELF</Text>
            </Pressable>
            </View>

            <View style={styles.recent}>
            <Text style={styles.title}>Recherches Récentes</Text>


            <View style={styles.flex}>
            <Text style={styles.recentit}>Titre de chanson</Text>
            <Text style={styles.recentit}>X</Text>
            </View>
            <View style={styles.flex}>
            <Text style={styles.recentit}>Titre de chanson</Text>
            <Text style={styles.recentit}>X</Text>
            </View>
            <View style={styles.flex}>
            <Text style={styles.recentit}>Titre de chanson</Text>
            <Text style={styles.recentit}>X</Text>
            </View>
            <View style={styles.flex}>
            <Text style={styles.recentit}>Titre de chanson</Text>
            <Text style={styles.recentit}>X</Text>
            </View>
            <View style={styles.flex}>
            <Text style={styles.recentit}>Titre de chanson</Text>
            <Text style={styles.recentit}>X</Text>
            </View>
            <View style={styles.flex}>
            <Text style={styles.recentit}>Titre de chanson</Text>
            <Text style={styles.recentit}>X</Text>
            </View>
            

            </View>

            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    flex: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        marginBottom:5,
    },
    cross: {
    marginTop:10,
    },
    recent: {
        flex: 3,
        backgroundColor: '#23262B',
    },
    popit: {
        color:'white',
        fontSize:'12',
    },
    recentit: {
        fontSize:'14',
        color:'white',
        marginLeft:15,
        margin:5,
    },
    recommended: {
        flexDirection:'row',
        flexWrap: "wrap",
        marginBottom:20,
    },
    popular: {
        color:'white',
        borderRadius: 15,
        marginVertical:5,
        marginHorizontal:15,
        padding:10,
        backgroundColor:'rgba(164, 74, 255, 0.3)',
    },
    title: {
    fontWeight:'bold',
    fontSize:'20',
    color:'white',
    marginLeft:15,
    marginBottom:7,
    },
    container: {
        height: '100%',
        backgroundColor: '#23262B',
    },


    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#23262B',
    },
    searchIcon: {
        position: 'absolute',
        right: 30,
        zIndex: 1,
        color: '#A54AFF',
        fontSize: 24
    },
    input: {
        fontSize:13,
        backgroundColor:'rgba(164, 74, 255, 0.3)',
        opacity:'8%',
        width: '90%',
        color:'white',
        borderRadius: 12.2,
        borderColor: 'rgba(164, 74, 255, 0.3)',
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

})