import React from 'react'
import { View, Text } from "react-native";
import PrimaryButton from '../Button/PrimaryButton';
import SecondaryButton from '../Button/SecondaryButton';
import styles from './cardStyle'

export default function CardUI(props) {
    const {
        truckNo, //string
        statusType, // rejected, accepted, waiting
        statusDescription = "",
    } = props;

    console.log({ props })

    function statusColor(status) {
        if (status === "Rejected") {
            return "#DF0019"
        } else if (status === "Waiting") {
            return "#E0B00E"
        } else {
            return "#35B720"
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderTitle}>
                    Truck #{truckNo}
                </Text>
            </View>
            <View style={styles.cardBody}>
                <View style={styles.row}>
                    <View>
                        <Text>
                            Status : 
                        </Text>
                    </View>
                    <View style={[styles.flex, styles.row]}>
                        <Text style={{ color: statusColor(statusType) }}>
                            {` ${statusType} `}
                        </Text>
                        <Text>
                            {statusDescription}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.cardFooter}>
                <View style={[styles.row, styles.spaced]}>
                    <SecondaryButton {...{ title: "More Info" }} />
                    <PrimaryButton {...{ title: "Dispatch" }} />
                </View>
            </View>
        </View>
    )
}