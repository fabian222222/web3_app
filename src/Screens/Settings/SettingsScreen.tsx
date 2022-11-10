import React from 'react';

import { SafeAreaView, Text,View, Image,StyleSheet, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function SettingScreen() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={ styles.container }>
            <View style={ styles.info }>
                <View  style={ styles.infot }>
                    <Image
                        style={ styles.pfp }
                        source={require(`./../../../assets/images/albumCover/noLoveLost.jpg`)} 
                    />
                </View>
                <View  style={ styles.infot2 }>
                    <Text style={ styles.info2 }>Cam10</Text>
                    <Text style={ styles.info3 }>Nombre d'écoutes: 250</Text>
                    <Text style={ styles.info3 }>Nombre d'achat: 72</Text>
                </View>
            </View>
            <View style={ styles.settingss }>
                <Pressable style={styles.settings} >
                    <Text style={styles.setting}>Mes achats</Text>
                </Pressable>
                <Pressable style={styles.settings} >
                    <Text style={styles.setting}>Mes comptes liés</Text>
                </Pressable>
                <Pressable 
                    style={styles.settings} 
                    onPress={() => {
                        navigation.navigate('SettingHistory');
                    }}
                >
                    <Text style={styles.setting}>Mes écoutes</Text>
                </Pressable>
                <Pressable style={styles.settings} >
                    <Text style={styles.setting}>Mon historique de recherche</Text>
                </Pressable>
                <Pressable style={styles.settings} >
                    <Text style={styles.setting}>Tutoriels</Text>
                </Pressable>
                <Pressable style={styles.settings} >
                    <Text style={styles.setting}>Contact</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#23262B',
        height: '100%',
        alignItems: 'center',
    },
    pfp: {
        width: '100%',
        height: '80%',
        marginVertical:17,
        marginLeft:15,
        borderRadius: 12.5,
        alignItems: 'center',
    },
    info: {
        marginVertical: 20,
        width:'90%',
        backgroundColor:'rgba(164, 74, 255, 0.08)',
        height:'25%',
        flexDirection: "row",

    }, 
    infot: {
        width: '40%',
    }, 
    infot2: {
        marginTop:50,
    marginLeft:30,
    }, 
    info2: {
    color:'white',
    fontSize: 20,
    fontWeight:'bold',
    margin:5,
    marginBottom:5,

    }, 
    settings: {
        color:'white',
        fontSize: 20,
        textAlign:'left',
        borderBottomWidth: 0.3,
        borderBottomColor: 'white' ,
        borderColor:'white',      
        marginBottom:5,
        padding:5,
    }, 
    setting: {
        color:'white',
        fontSize: 20,
    }, 
    settingss: {
        marginTop:10,
        width:'90%'
    }, 
    info3: {
        margin:2,
        color:'white',
        fontSize:'14'
    }, 
})