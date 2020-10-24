import React from 'react'
import BaseButton from '../BaseButton'
import { StyleSheet } from 'react-native';

export default function PrimaryButton(props) {
    return <BaseButton
        customStyle={[styles.primaryButton, props.customStyle]}
        customStyleTitle={[styles.primaryButtonTitle, props.customStyleTitle]}
        {...props}
    />
}


const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: '#0075FF'
    },
    primaryButtonTitle: {
        color: 'white'
    }
})