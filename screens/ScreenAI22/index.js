import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        <Image style={styles.mapImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.eta}>Estimated Time of Arrival: 15 mins</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Consumer Details</Text>
        <Text>Name: John Doe</Text>
        <Text>Email: john.doe@example.com</Text>
        <Text>Phone Number: +1234567890</Text>
        <View style={styles.messageContainer}>
          <TextInput style={styles.messageInput} placeholder="Message" />
          <Button title="Send" onPress={() => {}} />
        </View>
        <Text style={styles.title}>Reached to the Consumer</Text>
        <TextInput style={styles.otpInput} placeholder="Enter OTP" />
        <Button title="Start the Ride" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  mapContainer: {
    flex: 1,
    marginBottom: 20
  },
  mapImage: {
    width: '100%',
    height: '100%'
  },
  eta: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: '#fff',
    fontWeight: 'bold'
  },
  detailsContainer: {
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  messageInput: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    marginRight: 10,
    padding: 5
  },
  otpInput: {
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20,
    padding: 5
  }
});
export default ScreenComponent;