import React, { useState } from 'react'

import { SafeAreaView, StyleSheet, View, Pressable, Text, FlatList } from 'react-native'

import { PurchaseList } from '../../DataMockup/Wallet/PurchaseList'
import { PurchaseList as PurchaseListInterface} from '../../Interface/Wallet/PurchaseList'

import PurchaseBlock from '../../Components/Wallet/Purchase/PurchaseBlock'

const WalletScreen = () => {

    const ARTISTE = 'artiste'
    const ALBUM = 'album'
    const MUSIC = 'music'

    const [page, setPage] = useState(ARTISTE)

    const pageChecker = (pageRequest: string) => {
        if (pageRequest !== page) setPage(pageRequest)
    }

    return (
        <SafeAreaView style={ styles.container }>
            <View style={ styles.purchaseTabs } >
                <Pressable
                    style={ page === ARTISTE ? [styles.purchaseTab, styles.purchaseTabSelected] : styles.purchaseTab }
                    onPress={() => {
                        pageChecker(ARTISTE)
                    }}
                >
                    <Text style={ page === ARTISTE ? [styles.purchaseText, styles.purchaseTextSelected] : styles.purchaseText } >Artiste</Text>
                </Pressable>
                <Pressable
                    style={ page === ALBUM ? [styles.purchaseTab, styles.purchaseTabSelected] : styles.purchaseTab }
                    onPress={() => {
                        pageChecker(ALBUM)
                    }}
                >
                    <Text style={ page === ALBUM ? [styles.purchaseText, styles.purchaseTextSelected] : styles.purchaseText } >Album</Text>
                </Pressable>
                <Pressable
                    style={ page === MUSIC ? [styles.purchaseTab, styles.purchaseTabSelected] : styles.purchaseTab }
                    onPress={() => {
                        pageChecker(MUSIC)
                    }}
                >
                    <Text style={ page === MUSIC ? [styles.purchaseText, styles.purchaseTextSelected] : styles.purchaseText } >Musique</Text>
                </Pressable>
            </View>
            <FlatList 
                style={ styles.purchaseContainer }
                data={PurchaseList}
                renderItem={({item}: {item: PurchaseListInterface}) => {
                    return(
                        <PurchaseBlock album={item} />
                    )
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#23262B',
        paddingHorizontal: 15
    },
    purchaseTabs: {
        width: '100%',
        flexDirection: 'row',
        marginVertical: 30
    },
    purchaseTab: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 15,
    },
    purchaseTabSelected: {
        borderColor: '#4A316A',
        borderBottomWidth: 3,
    },
    purchaseText: {
        color: 'rgba(255,255,255, .4)',
        fontSize: 20,
        fontWeight: '600',
    },
    purchaseTextSelected: {
        color: 'white',
    },
    purchaseContainer: {
        paddingHorizontal: 15
    }
})

export default WalletScreen