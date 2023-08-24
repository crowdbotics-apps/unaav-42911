import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    image: 'https://tinyurl.com/42evm3m3',
    text: 'Welcome to our App!'
  }, {
    image: 'https://tinyurl.com/42evm3m3',
    text: 'Enjoy the features we offer.'
  }, {
    image: 'https://tinyurl.com/42evm3m3',
    text: 'Get started now!'
  }];

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return <SafeAreaView style={styles.container}>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {slides.map((slide, index) => <View key={index} style={styles.slide}>
            <Image source={{
          uri: slide.image
        }} style={styles.image} />
            <Text style={styles.text}>{slide.text}</Text>
          </View>)}
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handlePrevious} style={styles.button}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        {currentSlide === slides.length - 1 ? <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity> : <TouchableOpacity onPress={() => {
        navigation.navigate("ScreenAI4");
      }} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>}
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  slide: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover'
  },
  text: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    marginVertical: 20
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
});
export default OnboardingScreen;