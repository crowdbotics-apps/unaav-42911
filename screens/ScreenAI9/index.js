import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Button } from 'react-native';

const BackgroundCheckScreen = () => {
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
    </SafeAreaView>;
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
  }
});
export default BackgroundCheckScreen;