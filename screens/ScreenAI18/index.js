import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, Image } from 'react-native';

const TermsAndConditionsScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          eu lorem et ultricies. In porta lorem at dui semper porttitor. Nullam
          quis cursus dui. Cras tincidunt vehicula tellus eu facilisis. Donec
          nisi turpis, iaculis et arcu a, aliquet ultrices nisl. Nam in pharetra
          odio, ac blandit metus. Suspendisse potenti. Praesent elementum diam
          non orci cursus rutrum. Pellentesque condimentum ultrices dignissim.
          Sed a tempor ligula, vel luctus sapien. Mauris vehicula rutrum massa.
          Duis condimentum, ex quis ullamcorper rhoncus, erat libero tempor
          arcu, at bibendum metus nibh id lorem.
        </Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    padding: 16
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16
  },
  text: {
    fontSize: 16,
    lineHeight: 24
  }
});
export default TermsAndConditionsScreen;