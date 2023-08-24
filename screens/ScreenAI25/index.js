import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, TextInput, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={_styles.FiySokcV}>
      <View style={_styles.NuGwEIob}>
        <Text style={_styles.cPVKlMlY}>Map View</Text>
        <Text>Your Location</Text>
        <Text>Destination</Text>
        <Text>Estimated Time of Arrival</Text>
        <Text>OTP: 1234</Text>
        <View style={_styles.FaYEYLUf}>
          <Image style={_styles.zngpfGKm} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <View style={_styles.VgLwYwOz}>
            <Text>Driver Name</Text>
            <Text>Vehicle Name</Text>
            <Text>Vehicle Number</Text>
            <Text>Phone Number</Text>
            <Text>Average Rating: 4.5</Text>
          </View>
        </View>
        <Button title="View Reviews" onPress={() => {}} style={_styles.TZHXEVsz} />
        <Button title="Give Review" onPress={() => {}} />
        <View style={_styles.xzervyXw}>
          <TextInput style={_styles.tobgWJDc} placeholder="Message" />
          <TouchableOpacity style={_styles.iNLJOBQA}>
            <Text>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI30");
    }}><Text style={_styles.hYkVfygH}></Text></Pressable></SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  FiySokcV: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  NuGwEIob: {
    padding: 20
  },
  cPVKlMlY: {
    fontSize: 20,
    fontWeight: "bold"
  },
  FaYEYLUf: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  zngpfGKm: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  VgLwYwOz: {
    marginLeft: 10
  },
  xzervyXw: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  tobgWJDc: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  iNLJOBQA: {
    marginLeft: 10
  },
  TZHXEVsz: {
    position: "relative"
  },
  hYkVfygH: {
    width: 350,
    height: 36,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 4,
    top: -149
  }
});