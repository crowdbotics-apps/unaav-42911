import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, FlatList, TouchableOpacity } from 'react-native';

const Screen = () => {
  const navigation = useNavigation();
  const dummyData = [{
    id: '1',
    driver: 'John Doe',
    amount: '$20',
    rating: 4.5
  }, {
    id: '2',
    driver: 'Jane Doe',
    amount: '$15',
    rating: 4.0
  }, {
    id: '3',
    driver: 'Jim Doe',
    amount: '$25',
    rating: 4.7
  }];
  return <SafeAreaView style={_styles.bdcsirKZ}>
      <View style={_styles.yoeKoEmO}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.MIeSLjDh} />
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.pZwwVMrh} />
      <Pressable onPress={() => {
        navigation.navigate("ScreenAI23");
      }}><Text style={_styles.OwnBINPB}>{"Book a ride"}</Text></Pressable></View>
      <View style={_styles.cgrIYTNx}>
        <TextInput placeholder="Search" style={_styles.BXIrheea} />
        <TextInput placeholder="Pickup address" style={_styles.uDpTvNVs} />
        <Button title="Use device location" onPress={() => {}} />
        <TextInput placeholder="Drop off address" style={_styles.LyaGvxjM} />
        <Text style={_styles.rhQLPQfg}>Price per mile: $1.5</Text>
        <Button title="Book" onPress={() => {}} />
        <Text style={_styles.uzLLqpdi}>Active ride: None</Text>
        <Text style={_styles.PtBVepsT}>OTP: 1234</Text>
        <Button title="Go to My Ride Screen" onPress={() => {}} />
      </View>
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.jMhLcHWS}>
            <Pressable><Text>Driver: {item.driver}</Text></Pressable>
            <Text>Amount paid: {item.amount}</Text>
            <Text>Rating: {item.rating}</Text>
            <Button title="Review driver" onPress={() => {}} />
            <Button title="Report driver" onPress={() => {}} />
          </View>} />
      <View style={_styles.kGidZgAI}>
        <TouchableOpacity onPress={() => {}}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>Ride history</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

export default Screen;

const _styles = StyleSheet.create({
  bdcsirKZ: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  yoeKoEmO: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  MIeSLjDh: {
    width: 30,
    height: 30
  },
  pZwwVMrh: {
    width: 30,
    height: 30
  },
  cgrIYTNx: {
    padding: 10
  },
  BXIrheea: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5
  },
  uDpTvNVs: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  LyaGvxjM: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  rhQLPQfg: {
    marginTop: 10
  },
  uzLLqpdi: {
    marginTop: 10
  },
  PtBVepsT: {
    marginTop: 10
  },
  jMhLcHWS: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  kGidZgAI: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#fff"
  },
  OwnBINPB: {
    width: 206,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: -121,
    top: -2
  }
});