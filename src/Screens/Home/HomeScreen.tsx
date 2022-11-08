import { SafeAreaView, Text, StyleSheet } from "react-native"

export default function UserScreen() {
    return (
        <SafeAreaView style={ styles.container }>
            <Text>This is my home page</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})