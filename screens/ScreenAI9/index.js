import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Button } from 'react-native';

const BackgroundCheckScreen = () => {
  const navigation = useNavigation();
  const backgroundCheckStatus = 'Successful';
  const additionalInfo = 'Your background check was successful. You can now proceed to the next step.';
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.status}>{backgroundCheckStatus}</Text>
        <Text style={styles.info}>{additionalInfo}</Text>
        <Button title="Continue" onPress={() => {}} />
      </View>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI10");
    }}><Text style={styles.hnNIjpkk}></Text></Pressable></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  status: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  hnNIjpkk: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: -51,
    top: -63
  }
});
export default BackgroundCheckScreen;