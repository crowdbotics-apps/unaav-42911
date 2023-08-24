import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const UploadScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.uploadSection}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.text}>Driver's License</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Upload</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.uploadSection}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.text}>Insurance Documents</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Upload</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.uploadSection}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.text}>Liability Policy</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Upload</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.uploadSection}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.text}>Personal Identification</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Upload</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  uploadSection: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#4B9DFE',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  continueButton: {
    backgroundColor: '#4B9DFE',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center'
  }
});
export default UploadScreen;