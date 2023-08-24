import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, TouchableOpacity, Image, CheckBox } from 'react-native';

const App = () => {
  const [isSelected, setSelection] = useState(false);
  return <SafeAreaView style={_styles.doZUEnAH}>
      <Image style={_styles.QygOjUcq} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={_styles.DKlbywOX}>I'm a</Text>
      <Button title="Driver" onPress={() => {}} />
      <Button title="Consumer/Rider" onPress={() => {}} />
      <TextInput placeholder="Name" style={_styles.VAiLxPpq} />
      <TextInput placeholder="Email" style={_styles.wFQOWOtJ} />
      <TextInput placeholder="Phone number" style={_styles.YNvwIeza} />
      <TextInput placeholder="Password" secureTextEntry={true} style={_styles.TKMJapSs} />
      <TextInput placeholder="Confirm password" secureTextEntry={true} style={_styles.osIqkdaM} />
      <View style={_styles.LaQOkHaL}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={_styles.hVnOtvma} />
        <Text style={_styles.DhTebkoZ}>I agree to the Terms and Conditions</Text>
      </View>
      <Button title="Sign Up" onPress={() => {}} />
      <Text style={_styles.AhJdfblp}>OR</Text>
      <Text style={_styles.zAflEAoj}>Sign Up via:</Text>
      <Button title="Google" onPress={() => {}} />
      <Button title="Apple" onPress={() => {}} />
      <Button title="Facebook" onPress={() => {}} />
      <TouchableOpacity onPress={() => {}}>
        <Text style={_styles.MYdebNWs}>Already have account? Sign in</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

export default App;

const _styles = StyleSheet.create({
  doZUEnAH: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  QygOjUcq: {
    width: 100,
    height: 100
  },
  DKlbywOX: {
    fontSize: 24,
    fontWeight: "bold"
  },
  VAiLxPpq: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  wFQOWOtJ: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  YNvwIeza: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  TKMJapSs: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  osIqkdaM: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  LaQOkHaL: {
    flexDirection: "row",
    alignItems: "center"
  },
  hVnOtvma: {
    alignSelf: "center"
  },
  DhTebkoZ: {
    margin: 8
  },
  AhJdfblp: {
    fontSize: 16,
    fontWeight: "bold"
  },
  zAflEAoj: {
    fontSize: 16,
    fontWeight: "bold"
  },
  MYdebNWs: {
    color: "blue"
  }
});