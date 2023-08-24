import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, Picker, ScrollView } from 'react-native';

const App = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={_styles.iLWPAQRS}>
      <View style={_styles.hJYYzNJV}>
        <Text style={_styles.RwEypxXh}>Map View</Text>
        <Image style={_styles.wiQbsVnT} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={_styles.MbkfWxFK}>Pick Up Location</Text>
        <Text style={_styles.pdDlDhSZ}>Selected Location</Text>
        <Text style={_styles.MMuIeVcx}>Drop Off Location</Text>
        <Text style={_styles.pCwVIJxy}>Selected Location</Text>
        <Text style={_styles.NvXlwAYK}>Nearby Cabs</Text>
        <ScrollView horizontal>
          <View style={_styles.ojovwYfE}>
            <View style={_styles.fnlayarQ}>
              <Image style={_styles.HbLQRBEN} source={{
              uri: 'https://tinyurl.com/42evm3m3'
            }} />
              <Text style={_styles.HtDXeoth}>Cab 1</Text>
            </View>
            <View style={_styles.bmoWquZn}>
              <Image style={_styles.dzYvXiyw} source={{
              uri: 'https://tinyurl.com/42evm3m3'
            }} />
              <Text style={_styles.HVvEZrDV}>Cab 2</Text>
            </View>
          </View>
        </ScrollView>
        <Text style={_styles.YKbiJJsh}>Driver Preference</Text>
        <Picker>
          <Picker.Item label="English" value="english" />
          <Picker.Item label="Spanish" value="spanish" />
        </Picker>
        <Picker>
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
        <Button title="Continue" onPress={() => {}} />
      </View>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI24");
    }}><Text style={_styles.SFSCoWEE}></Text></Pressable></SafeAreaView>;
};

export default App;

const _styles = StyleSheet.create({
  iLWPAQRS: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  hJYYzNJV: {
    flex: 1,
    padding: 20
  },
  RwEypxXh: {
    fontSize: 20,
    fontWeight: "bold"
  },
  wiQbsVnT: {
    width: "100%",
    height: 200,
    marginVertical: 20
  },
  MbkfWxFK: {
    fontSize: 16,
    fontWeight: "bold"
  },
  pdDlDhSZ: {
    fontSize: 16,
    color: "#888"
  },
  MMuIeVcx: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20
  },
  pCwVIJxy: {
    fontSize: 16,
    color: "#888"
  },
  NvXlwAYK: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20
  },
  ojovwYfE: {
    flexDirection: "row",
    marginTop: 10
  },
  fnlayarQ: {
    marginRight: 20
  },
  HbLQRBEN: {
    width: 100,
    height: 100
  },
  HtDXeoth: {
    textAlign: "center"
  },
  bmoWquZn: {
    marginRight: 20
  },
  dzYvXiyw: {
    width: 100,
    height: 100
  },
  HVvEZrDV: {
    textAlign: "center"
  },
  YKbiJJsh: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20
  },
  SFSCoWEE: {
    width: 360,
    height: 102,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 0,
    top: -52
  }
});