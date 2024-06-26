import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'


function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'

    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                Hello World
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        // backgroundColor: 'black',
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#000000'
    }
})

export default AppPro;