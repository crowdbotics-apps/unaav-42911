import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const RatingScreen = () => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  const handleSave = () => {
    alert(`Rating: ${rating}, Message: ${message}`);
  };

  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.text}>Name: John Doe</Text>
      <Text style={styles.text}>Email: john.doe@example.com</Text>
      <Text style={styles.text}>Current Rating: {rating}</Text>
      <Text style={styles.text}>Rate:</Text>
      {[1, 2, 3, 4, 5].map(star => <Text key={star} style={styles.star} onPress={() => setRating(star)}>
          {star} Star - {['Poor', 'Bad', 'Good', 'Very Good', 'Excellent'][star - 1]}
        </Text>)}
      <TextInput style={styles.input} onChangeText={setMessage} value={message} placeholder="Leave a review" />
      <Button title="Save" onPress={handleSave} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10
  },
  star: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingLeft: 10
  }
});
export default RatingScreen;