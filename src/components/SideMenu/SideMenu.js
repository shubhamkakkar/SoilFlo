import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function SideMenu() {
    const options = ['Dashboard', 'Dispatch', 'Receiving', 'Tickets', 'Manage Sites', 'Reports', 'Site Users'];

    return (
        <View style={styles.container}>
            {
                options.map((menuItem, index) => (
                    <TouchableOpacity key={index.toString()}  style={[styles.row, index === 2 && styles.highlighted]}>
                        <Text style={styles.rowItemText}>
                            {menuItem}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#34353E',
        flex: 1,
    },
    row: {
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    highlighted: {
        backgroundColor: 'black'
    },
    rowItemText: {
        color: 'white'
    }
})