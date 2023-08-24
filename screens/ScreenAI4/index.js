import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, TextInput, Button, TouchableOpacity, Text } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} placeholder="Email address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Remember me</Text>
      </View>
      <Button title="Forgot password?" onPress={() => {}} />
      <Button title="Sign In" onPress={() => {}} />
      <Text style={styles.orText}>OR</Text>
      <Button title="Sign in via Google" onPress={() => {}} />
      <Button title="Sign in via Apple" onPress={() => {}} />
      <Button title="Sign in via Facebook" onPress={() => {}} />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.linkText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8
  },
  checkboxContainer: {
    flexDirection: 'row',
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
    color: 'blue'
  }
});
export default ScreenComponent;