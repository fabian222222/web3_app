import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { colors } from '../../DesignSystem/Colors'

import MostListenMusics from '../../Components/Wallet/MostListenMusic/MostListenMusics'

const WalletHistory = () => {

    const MOST_LITSEN = 'plus_écouté'
    const ALL_LITSEN = 'temps_écoute'

    const [page, setPage] = useState(MOST_LITSEN)

    const checkPage = (pageChosen: string) => {
        if (!(page === pageChosen)) {
            setPage(pageChosen)
        }
    }

    return (
        <SafeAreaView style={ styles.container }>
            <View style={ styles.toggleContainer }>
                <TouchableOpacity 
                    style={ page === MOST_LITSEN ? [styles.toggle, styles.toggleSelected] : styles.toggle }
                    onPress={() => {
                        checkPage(MOST_LITSEN)
                    }}
                >
                    <Text style={ styles.toggleText }>Titres les + écoutés</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={ page === ALL_LITSEN ? [styles.toggle, styles.toggleSelected] : styles.toggle }
                    onPress={() => {
                        checkPage(ALL_LITSEN)
                    }}
                >
                    <Text style={ styles.toggleText }>Temps d'écoute</Text>
                </TouchableOpacity>
            </View>

            <View style={page === MOST_LITSEN ? styles.display : styles.hide } >
                <MostListenMusics />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: '100%',
        backgroundColor: colors.primaryBlack,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    toggleContainer: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 50,
        overflow: 'hidden',
    },
    toggle: {
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.grey,
    },
    toggleSelected: {
        borderRadius: 50,
        borderColor: '#ED4E55',
        borderWidth: 2
    },
    toggleText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '700'
    },
    hide: {
        display: 'none',
    },
    display: {
        display: 'flex',
    }
})

export default WalletHistory