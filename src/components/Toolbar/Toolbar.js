import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import SecondaryButton from '../../UI/Button/SecondaryButton';
const WIDTH_SCREEN_GREATER_THAN_TABLET_BOOL = Dimensions.get("screen").width > 790;


export default function Toolbar() {
    return (
        <View style={[styles.container, styles.row]}>
            <View style={styles.center}>
                <Text style={styles.bold}>
                    Dispatch
                </Text>
                <Text>
                    Series A
                </Text>
            </View>
            {!WIDTH_SCREEN_GREATER_THAN_TABLET_BOOL && <SecondaryButton {...{ title: "Menu" }} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    row: {
        justifyContent: "space-between",
        flexDirection: 'row'
    },
    center: {
        justifyContent: "center"
    },
    bold: {
        fontWeight: 'bold'
    }
})