import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, TextInput, FlatList } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'User 1',
  email: 'user1@example.com',
  lastMessage: 'Hello',
  timestamp: '10:00 AM'
}, {
  id: '2',
  name: 'User 2',
  email: 'user2@example.com',
  lastMessage: 'Hi',
  timestamp: '10:30 AM'
} // Add more dummy data here
];

const ProfileScreen = () => {
  return <SafeAreaView style={_styles.RXxUnMLW}>
      <View style={_styles.ZSgFXvcZ}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.CTxcTNor} />
        <Text style={_styles.MuDzyvdk}>Username</Text>
        <Text style={_styles.hrbYIdTM}>email@example.com</Text>
      </View>
      <View style={_styles.wpJMjZHs}>
        <TextInput style={_styles.WFvdBQFm} placeholder="Search" />
      </View>
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.EZWZsxGn}>
            <View>
              <Pressable><Text style={_styles.sRdkdsNN}>{item.name}</Text></Pressable>
              <Text style={_styles.swoLTuOZ}>{item.email}</Text>
            </View>
            <View>
              <Text style={_styles.AwoMBhrt}>{item.lastMessage}</Text>
              <Text style={_styles.AfZdndDh}>{item.timestamp}</Text>
            </View>
          <Pressable><Text style={_styles.MDWCXicN}>{"Report user"}</Text></Pressable></View>} />
      <View style={_styles.dUHOkVmY}>
        <Button title="Report User" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default ProfileScreen;

const _styles = StyleSheet.create({
  RXxUnMLW: {
    flex: 1,
    backgroundColor: "#fff"
  },
  ZSgFXvcZ: {
    alignItems: "center",
    padding: 20
  },
  CTxcTNor: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  MuDzyvdk: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10
  },
  hrbYIdTM: {
    fontSize: 18,
    color: "gray"
  },
  wpJMjZHs: {
    padding: 20
  },
  WFvdBQFm: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10
  },
  EZWZsxGn: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  sRdkdsNN: {
    fontSize: 18,
    fontWeight: "bold"
  },
  swoLTuOZ: {
    fontSize: 16,
    color: "gray"
  },
  AwoMBhrt: {
    fontSize: 16,
    color: "gray"
  },
  AfZdndDh: {
    fontSize: 14,
    color: "gray"
  },
  dUHOkVmY: {
    padding: 20
  },
  MDWCXicN: {
    width: 78,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});