import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, Image, Button, StyleSheet, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const DriverScreen = () => {
  const navigation = useNavigation();
  const driver = {
    name: 'John Doe',
    vehicle: 'Toyota Prius',
    vehicleNumber: 'XYZ 1234',
    rating: 4.5,
    image: 'https://tinyurl.com/42evm3m3',
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    },
    arrivalTime: '5 mins',
    dropOffTime: '20 mins',
    distance: '10 miles'
  };
  return <SafeAreaView style={styles.container}>
      <MapView style={styles.map} initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }}>
        <Marker coordinate={driver.location} />
      </MapView>
      <View style={styles.infoContainer}>
        <Image source={{
        uri: driver.image
      }} style={styles.image} />
        <Text style={styles.text}>{driver.name}</Text>
        <Text style={styles.text}>{driver.vehicle} - {driver.vehicleNumber}</Text>
        <Text style={styles.text}>Rating: {driver.rating}</Text>
        <Text style={styles.text}>Arrival Time: {driver.arrivalTime}</Text>
        <Text style={styles.text}>Drop Off Time: {driver.dropOffTime}</Text>
        <Text style={styles.text}>Distance: {driver.distance}</Text>
        <Button title="Confirm Ride and Pay Now" onPress={() => {}} />
        <Button title="Cancel Ride" onPress={() => {}} color="red" />
      </View>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI16");
    }}><Text style={styles.brjKNEMG}>Lorem ipsum…</Text></Pressable></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  infoContainer: {
    padding: 20,
    backgroundColor: 'white'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    marginBottom: 10
  },
  brjKNEMG: {
    width: 332,
    height: 41,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 11,
    top: -90
  }
});
export default DriverScreen;