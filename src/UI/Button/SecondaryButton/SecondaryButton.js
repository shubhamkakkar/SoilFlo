import React from 'react'
import BaseButton from '../BaseButton'
import { StyleSheet } from 'react-native';

export default function SecondaryButton(props) {
    return <BaseButton
        customStyle={[styles.secondaryButton, props.customStyle]}
        {...props}
    />
}


const styles = StyleSheet.create({
    secondaryButton: {
        backgroundColor: '#FFFFFF'
    },
})