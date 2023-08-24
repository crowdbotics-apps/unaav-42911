import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from "react-native";

const ScreenComponent = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} />
      <TextInput style={styles.input} placeholder="Email address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Remember me</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI6");
    }}>
        <Text style={styles.buttonText}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI20");
    }}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>OR</Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Sign in via Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Sign in via Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Sign in via Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
      navigation.navigate("ScreenAI5");
    }}>
        <Text style={styles.linkText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI21");
    }}><Text style={styles.QsLiiyxs}>{"Driver Sign in"}</Text></Pressable></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  label: {
    margin: 8
  },
  orText: {
    marginVertical: 10,
    fontSize: 16
  },
  linkText: {
    marginTop: 20,
    color: "blue"
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,
    width: "100%",
    alignItems: "center"
  },
  buttonText: {
    color: "black"
  },
  QsLiiyxs: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 65,
    top: -251,
    textAlign: "center"
  }
});
export default ScreenComponent;