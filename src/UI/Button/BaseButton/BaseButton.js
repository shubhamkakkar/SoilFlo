import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function BaseButton(props) {
    const {
        icon,
        customStyle = {},
        customStyleTitle = {},
        title = '',
        onPress = () => { }
    } = props;
    return (
        <TouchableOpacity
            {...{ onPress }}
            style={[styles.baseButton, customStyle]}>
            {icon && icon}
            <Text style={customStyleTitle}> {title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    baseButton: {
        padding: 7.5,
        borderRadius: 5,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        marginTop: 5,
        marginHorizontal: 2.5
    },
})