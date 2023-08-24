import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WelcomeScreen = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start();
  }, [fadeAnim]);
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Animated.Image style={{ ...styles.logo,
        opacity: fadeAnim
      }} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.text}>UNave</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDB813',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  text: {
    marginTop: 20,
    fontSize: 28,
    color: '#FFFFFF'
  }
});
export default WelcomeScreen;