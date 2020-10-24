import React from 'react';
import Card from './UI/Card';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native'
import SecondaryButton from './UI/Button/SecondaryButton';
import PrimaryButton from './UI/Button/PrimaryButton';
import Toolbar from "././components/Toolbar"
import SideMenu from "././components/SideMenu"

export default function App() {
const WIDTH_SCREEN_GREATER_THAN_TABLET_BOOL = Dimensions.get("screen").width > 790;

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
        <View style={styles.row}>
          <SecondaryButton {...{ title: '12 trucks | 37 loads' }} />
          <SecondaryButton {...{ title: 'Sprint Sheet' }} />
          <PrimaryButton {...{ title: 'Add Truck' }} />
        </View>
      </View>
    )
  }

  function renderUI() {
    return <View style={styles.contianer}>
      <FlatList
        ListHeaderComponent={headerComponent}
        data={data}
        renderItem={({ item }) => <Card  {...item} />}
        keyExtractor={(item, index) => index.toString()}
        style={[styles.spacer, styles.listWrapper]}
      />
    </View>
  }

  return (
    <View style={styles.contianer}>
      <Toolbar />
      {WIDTH_SCREEN_GREATER_THAN_TABLET_BOOL
        ? <View style={styles.flexRow}>
          <View style={styles.flex1}>
            <SideMenu />
          </View>
          <View style={styles.flex3}>
            {renderUI()}
          </View>
        </View>
        : renderUI()
      }
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
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    flexWrap: 'wrap'
  },
  fullyCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  listWrapper: {
    backgroundColor: '#F5F6F7'
  },
  marginTop10: {
    marginTop: 10
  },
  flexRow: {
    flexDirection: 'row',
    flex: 1,
  },
  flex1: {
    flex:1,
  },
  flex3: {
    flex: 3
  }
})