import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Image, Text } from 'react-native';

const BankScreen = () => {
  const navigation = useNavigation();
  const [accountName, setAccountName] = useState('');
  const [password, setPassword] = useState('');
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Link your Bank Account</Text>
      <Text style={styles.description}>By providing your bank credentials, you are enabling the app or API to retrieve your financial data</Text>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} onChangeText={setAccountName} value={accountName} placeholder="Account Name" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      <Button title="Submit" onPress={() => {}} />
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI13");
    }}><Text style={styles.FvubMdme}></Text></Pressable></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    marginBottom: 20
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20
  },
  FvubMdme: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 123,
    top: -39
  }
});
export default BankScreen;