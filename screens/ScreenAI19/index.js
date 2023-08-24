import React from 'react';
import { SafeAreaView, ScrollView, Text, Image, StyleSheet } from 'react-native';

const PrivacyPolicyScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          eu lorem et ultricies. In porta lorem at dui semper, sit amet
          pretium metus aliquam. Praesent purus eros, posuere vel feugiat
          non, ullamcorper a est. Sed auctor nisl a turpis faucibus, ac
          varius eros lobortis.
        </Text>
        <Text style={styles.text}>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Sed sit amet libero sit amet risus laoreet
          aliquam sit amet in odio. Integer in sem in odio consequat mollis
          at a metus. Ut et diam ex. Etiam sit amet fringilla eros.
        </Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    marginBottom: 20
  }
});
export default PrivacyPolicyScreen;