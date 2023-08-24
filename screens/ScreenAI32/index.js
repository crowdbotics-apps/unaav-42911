import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, TouchableOpacity, CheckBox } from 'react-native';

const App = () => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);
  return <SafeAreaView style={_styles.zVRJJGps}>
      
      <TextInput placeholder="Name" style={_styles.dLdujVXD} />
      <TextInput placeholder="Email" style={_styles.EeqAjdzx} />
      <TextInput placeholder="Phone number" style={_styles.QDbBELQg} />
      <TextInput placeholder="Password" style={_styles.CaVarJDU} />
      <TextInput placeholder="Confirm password" style={_styles.jrDMIYUn} />
      <View style={_styles.dSuysgzw}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={_styles.BTUJLjgx} />
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI18");
      }}><Text style={_styles.lbhgePmV}>I agree to the Terms and Conditions</Text></Pressable>
      </View>
      <Button title="Sign Up" onPress={() => {}} />
      <Text style={_styles.ORoTemrR}>OR</Text>
      <Text>Sign Up via:</Text>
      <View style={_styles.kSMoLarO}>
        <Button title="Google" onPress={() => {}} />
        <Button title="Apple" onPress={() => {}} />
        <Button title="Facebook" onPress={() => {}} />
      </View>
      <View style={_styles.DdYOjHbE}>
        <Text>Already have account? </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={_styles.CeEFIcln}>Sign in</Text>
        </TouchableOpacity>
      </View>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI19");
    }}><Text style={_styles.GZQCLvxI}>{"And Privacy policy "}</Text></Pressable><Pressable onPress={() => {
      navigation.navigate("ScreenAI61");
    }}><Text style={_styles.hPmbRRjh}></Text></Pressable></SafeAreaView>;
};

export default App;

const _styles = StyleSheet.create({
  zVRJJGps: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  dLdujVXD: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 20
  },
  EeqAjdzx: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 20
  },
  QDbBELQg: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 20
  },
  CaVarJDU: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 20
  },
  jrDMIYUn: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 20
  },
  dSuysgzw: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  BTUJLjgx: {
    alignSelf: "center"
  },
  lbhgePmV: {
    marginLeft: 10
  },
  ORoTemrR: {
    marginVertical: 20
  },
  kSMoLarO: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginTop: 20
  },
  DdYOjHbE: {
    flexDirection: "row",
    marginTop: 20
  },
  CeEFIcln: {
    color: "blue"
  },
  GZQCLvxI: {
    width: 144,
    height: 41,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 51,
    top: -209
  },
  hPmbRRjh: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: -58,
    top: -203
  }
});