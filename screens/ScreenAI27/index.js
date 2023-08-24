import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.jWixhKWX}>
      <View style={_styles.rtZEFhQb}>
        <Button title="Back" onPress={() => {}} />
        <Text style={_styles.tiUfmNWe}>Sender's Full name</Text>
        <View style={_styles.ZMxefRKS}>
          <Text>Conversation history</Text>
        </View>
        <View style={_styles.qRmGBqPR}>
          <TextInput style={_styles.uXcJKaiN} placeholder="Write message" />
          <TouchableOpacity onPress={() => {}}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.IZFNICnE} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.TsNwDTiN} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.SFfBylUs} />
          </TouchableOpacity>
        </View>
        <Button title="Send message" onPress={() => {}} style={_styles.NKqKQsKt} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  jWixhKWX: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  rtZEFhQb: {
    padding: 20
  },
  tiUfmNWe: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  ZMxefRKS: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10
  },
  qRmGBqPR: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  uXcJKaiN: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10
  },
  IZFNICnE: {
    width: 30,
    height: 30,
    marginLeft: 10
  },
  TsNwDTiN: {
    width: 30,
    height: 30,
    marginLeft: 10
  },
  SFfBylUs: {
    width: 30,
    height: 30,
    marginLeft: 10
  },
  NKqKQsKt: {
    marginTop: 20
  }
});