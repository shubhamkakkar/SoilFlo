import React from 'react'
import BaseButton from '../BaseButton'
import { StyleSheet } from 'react-native';

export default function SecondaryButton(props) {
    return <BaseButton
        customStyle={styles.secondaryButton}
        customStyleTitle={styles.secondaryButtonTitle}
        {...props}
    />
}


const styles = StyleSheet.create({
    secondaryButton: {
        backgroundColor: '#FFFFFF'
    },
})