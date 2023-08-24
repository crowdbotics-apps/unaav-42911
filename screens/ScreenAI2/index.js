import { Pressable } from "react-native";
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Animated } from 'react-native';

const SplashScreen = ({
  navigation
}) => {
  const fadeAnim = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start(() => navigation.navigate('LoginScreen'));
  }, [fadeAnim]);
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Animated.Image style={{ ...styles.logo,
        opacity: fadeAnim
      }} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Animated.Text style={{ ...styles.text,
        opacity: fadeAnim
      }}>
          Welcome to Our App
        </Animated.Text>
      <Pressable onPress={() => {
        navigation.navigate("ScreenAI3");
      }}><Text style={styles.GeGiLGLX}>{"UNav"}</Text></Pressable></View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 200
  },
  text: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  GeGiLGLX: {
    width: 129,
    height: 63,
    lineHeight: 14,
    fontSize: 24,
    borderRadius: 0,
    flexDirection: "row",
    flex: 1,
    position: "absolute",
    left: -65,
    top: 14,
    textAlign: "center"
  }
});
export default SplashScreen;