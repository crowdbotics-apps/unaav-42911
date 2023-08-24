import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, FlatList } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  location: 'New York',
  destination: 'Los Angeles',
  distance: '3000 miles'
} // Add more dummy data here
];

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.AUXIjhQD}>
      <View style={_styles.ZKUihvdx}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.ORJXYeNo} />
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.vnaGhDGR} />
      </View>
      <Text style={_styles.EtucdVjk}>My data</Text>
      <View style={_styles.KUyvFuSJ}>
        <Text>Total number of rides: 100</Text>
        <Text>Total amount earned: $5000</Text>
      </View>
      <Button title="View transaction history" onPress={() => {}} />
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.gfpDdvyp}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text>{item.location}</Text>
            <Text>{item.destination}</Text>
            <Text>{item.distance}</Text>
            <View style={_styles.lUfgpzQA}>
              <Button title="Accept" onPress={() => {}} />
              <Button title="Reject" onPress={() => {}} />
            </View>
          </View>} />
      <View style={_styles.ilyhAPXC}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.IrWmTIgl} />
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.vjvLIqVD} />
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.hqOBkFQs} />
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.sYPJFLFl} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  AUXIjhQD: {
    flex: 1,
    backgroundColor: "#fff"
  },
  ZKUihvdx: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  ORJXYeNo: {
    width: 30,
    height: 30
  },
  vnaGhDGR: {
    width: 30,
    height: 30
  },
  EtucdVjk: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20
  },
  KUyvFuSJ: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  gfpDdvyp: {
    padding: 20
  },
  lUfgpzQA: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  ilyhAPXC: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20
  },
  IrWmTIgl: {
    width: 30,
    height: 30
  },
  vjvLIqVD: {
    width: 30,
    height: 30
  },
  hqOBkFQs: {
    width: 30,
    height: 30
  },
  sYPJFLFl: {
    width: 30,
    height: 30
  }
});