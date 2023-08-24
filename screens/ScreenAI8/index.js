import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, Text, Image, StyleSheet, ProgressBarAndroid } from 'react-native';

const BackgroundCheckScreen = () => {
  const navigation = useNavigation();
  const [status, setStatus] = useState('Pending');
  const [progress, setProgress] = useState(0);
  const statusMessages = {
    'Pending': 'Your background check is pending.',
    'In Progress': 'Your background check is in progress.',
    'Verifying Documents': 'We are currently verifying your documents.',
    'Completed': 'Your background check has been completed.'
  };
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Pressable onPress={() => {
      navigation.navigate("ScreenAI9");
    }}><Text style={styles.title}>Background Check Status</Text></Pressable>
      <Text style={styles.statusMessage}>{statusMessages[status]}</Text>
      <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={progress} />
      <Text style={styles.status}>Status: {status}</Text>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  statusMessage: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center'
  },
  status: {
    fontSize: 16,
    color: '#999',
    marginTop: 20
  }
});
export default BackgroundCheckScreen;