import React from 'react';

import { SafeAreaView, Text, StyleSheet, TextInput, View, Button ,Alert, Pressable } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

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

            <Text style={styles.title}>Recherche Populaires</Text>
            <View style={styles.recommended}>

            <Pressable style={styles.popular} >
            <Text  >Lil Nas X</Text>
            </Pressable>
            <Pressable style={styles.popular} >
            <Text >Montero</Text>
            </Pressable>
            <Pressable style={styles.popular} >
            <Text >Family Ties</Text>
            </Pressable>
            <Pressable style={styles.popular} >
            <Text >The Northern Boys</Text>
            </Pressable>
            <Pressable style={styles.popular} >
            <Text >I/ME/MYSELF</Text>
            </Pressable>
            </View>
            <Text style={styles.title}>Recherche Récentes</Text>

            <View style={styles.recent}>
            <Text style={styles.recentit}>Chinese Chicken</Text>
            <Text style={styles.recentit}>Recherche Récentes</Text>
            <Text style={styles.recentit}>Recherche Récentes</Text>
            <Text style={styles.recentit}>Recherche Récentes</Text>
            <Text style={styles.recentit}>Recherche Récentes</Text>
            <Text style={styles.recentit}>Recherche Récentes</Text>

            </View>

            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    recent: {
        flex: 3,
        backgroundColor: '#23262B',
    },
    recentit: {
        fontSize:'14',
        color:'white',
        marginLeft:15,
        margin:5,
    },
    recommended: {
        height:40,
        backgroundColor: '#23262B',
        flex: 1,
        flexDirection:'row',
        flexWrap: "wrap",
    },
    popular: {
        margin: 15,
        borderRadius: 15,
        padding:10,
        backgroundColor: '#D9D9D9',
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
        backgroundColor: 'rgba(164, 74, 255, 0.08)',
        position: 'absolute',
        right: 30,
        zIndex: 1,
        color: '#A54AFF',
        fontSize: 24
    },
    input: {
        fontSize:13,
        backgroundColor:'rgba(164, 74, 255, 0.08)',
        opacity:'8%',
        width: '90%',
        color:'white',
        borderRadius: 12.2,
        borderColor: 'rgba(164, 74, 255, 0.08)',
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

})