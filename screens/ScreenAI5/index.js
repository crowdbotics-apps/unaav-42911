import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, CheckBox } from "react-native";

const App = () => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);
  return <SafeAreaView style={_styles.doZUEnAH}>
      <Image style={_styles.QygOjUcq} source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} />
      <Text style={_styles.DKlbywOX}>I'm a</Text>
      <TouchableOpacity style={_styles.button} onPress={() => {
      navigation.navigate("ScreenAI61");
    }}>
        <Text style={_styles.buttonText}>Driver</Text>
      </TouchableOpacity>
      <TouchableOpacity style={_styles.button} onPress={() => {
      navigation.navigate("ScreenAI14");
    }}>
        <Text style={_styles.buttonText}>Consumer/Rider</Text>
      </TouchableOpacity>
      <TextInput placeholder="Name" style={_styles.VAiLxPpq} />
      <TextInput placeholder="Email" style={_styles.wFQOWOtJ} />
      <TextInput placeholder="Phone number" style={_styles.YNvwIeza} />
      <TextInput placeholder="Password" secureTextEntry={true} style={_styles.TKMJapSs} />
      <TextInput placeholder="Confirm password" secureTextEntry={true} style={_styles.osIqkdaM} />
      <View style={_styles.LaQOkHaL}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={_styles.hVnOtvma} />
        <Text style={_styles.DhTebkoZ}>
          I agree to the Terms and Conditions
        </Text>
      </View>
      <TouchableOpacity style={_styles.button} onPress={() => {
      navigation.navigate("ScreenAI61");
    }}>
        <Text style={_styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={_styles.AhJdfblp}>OR</Text>
      <Text style={_styles.zAflEAoj}>Sign Up via:</Text>
      <TouchableOpacity style={_styles.button}>
        <Text style={_styles.buttonText}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={_styles.button}>
        <Text style={_styles.buttonText}>Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={_styles.button}>
        <Text style={_styles.buttonText}>Facebook</Text>
      </TouchableOpacity>
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
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  buttonText: {
    color: "black",
    textAlign: "center"
  }
});