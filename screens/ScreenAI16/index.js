import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, StyleSheet, Picker } from 'react-native';

const PaymentScreen = ({
  navigation
}) => {
  const [selectedValue, setSelectedValue] = useState("card1");
  const [amount, setAmount] = useState('');
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <TextInput style={styles.input} onChangeText={setAmount} value={amount} placeholder="Payment Amount" keyboardType="numeric" />
      <Text style={styles.text}>Choose a payment option from the dropdown menu:</Text>
      <Picker selectedValue={selectedValue} style={styles.picker} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Card 1" value="card1" />
        <Picker.Item label="Card 2" value="card2" />
      </Picker>
      <View style={styles.cardList}>
        <Text style={styles.text}>List of added cards:</Text>
        <View style={styles.card}>
          <Image style={styles.cardImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.text}>Card 1</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.cardImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.text}>Card 2</Text>
        </View>
      </View>
      <Button title="Add a new card" onPress={() => navigation.navigate('AddCard')} />
      <View style={styles.buttonContainer}>
        <Button title="Pay" onPress={() => {}} />
        <Button title="Cancel" color="red" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20
  },
  cardList: {
    marginBottom: 20
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  cardImage: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default PaymentScreen;