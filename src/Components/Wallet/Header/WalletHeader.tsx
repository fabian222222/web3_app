import React from 'react'

import { View, StyleSheet, Text, Image, SafeAreaView } from 'react-native'

type WalletHeaderType = {
    title: string,
}

const WalletHeader = ({title}: WalletHeaderType) => {

    return (
        <SafeAreaView style={styles.headerContainer} >
            <View style={ styles.container }>
                <Text style={styles.headerTitle}>{title}</Text>
                <View style={ styles.notesContainer }>
                    <View style={ [styles.noteContainer, styles.yellowNote] } >
                        <Text style={ styles.noteText }>37</Text>
                        <Image 
                            source={require('./../../../../assets/note-yellow.png')}
                        />
                    </View>
                    <View style={ styles.noteContainer } >
                        <Text style={ styles.noteText } >15</Text>
                        <Image 
                            source={require('./../../../../assets/note-blue.png')}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#23262B',
    },
    container: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    headerTitle: {
        color: 'white',
        fontSize: 25,
        fontWeight: '800',
    },
    notesContainer: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#4A316A',
        backgroundColor: 'rgba(165, 74, 255, .08)',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    yellowNote: {
        marginRight: 20
    },
    noteContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    noteText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        marginRight: 10
    }
})

export default WalletHeader