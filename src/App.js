import React from 'react';
import Card from './UI/Card';
import { View, StyleSheet, FlatList } from 'react-native'
import SecondaryButton from './UI/Button/SecondaryButton';
import PrimaryButton from './UI/Button/PrimaryButton';

export default function App() {

  const data = [
    {
      truckNo: 123,
      statusType: "Waiting",
    },
    {
      truckNo: 124,
      statusType: "Rejected",
      statusDescription: 'by Lafarge Transfer Facility at 2:12pm.'
    },
    {
      truckNo: 126,
      statusType: "Accepted",
      statusDescription: 'by Lafarge Transfer Facility at 2:12pm. Return at 2:18.'
    },
  ]

  function headerComponent() {
    return (
      <View style={[styles.spacer, styles.contianer]}>
        <View>
          <View style={styles.fullyCenter}>
            <SecondaryButton {...{ title: '12 trucks | 37 loads' }} />
          </View>
        </View>
        <View style={styles.row}>
          <SecondaryButton {...{ title: 'Sprint Sheet' }} />
          <PrimaryButton {...{ title: 'Add Truck' }} />
        </View>

      </View>
    )
  }

  return (
    <View style={styles.contianer}>
      <FlatList
        ListHeaderComponent={headerComponent}
        data={data}
        renderItem={({ item }) => <Card  {...item} />}
        keyExtractor={(item, index) => index.toString()}
        style={[styles.spacer, styles.listWrapper]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
  },
  spacer: {
    padding: 20,
  },
  row: {
    justifyContent: 'space-around',
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
  },
  fullyCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  listWrapper: {
    backgroundColor: '#F5F6F7'
  }
})