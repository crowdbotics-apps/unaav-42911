import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const driverData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  currentRating: 4.5,
  ratings: [{
    id: '1',
    userName: 'User 1',
    date: '2021-09-01 10:00',
    stars: 5,
    message: 'Great driver!'
  }, {
    id: '2',
    userName: 'User 2',
    date: '2021-08-30 15:30',
    stars: 4,
    message: 'Good service.'
  } // More ratings...
  ]
};

const DriverScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.profileName}>{driverData.name}</Text>
        <Text style={styles.profileEmail}>{driverData.email}</Text>
        <Text style={styles.profileRating}>Current Rating: {driverData.currentRating}</Text>
      </View>
      <FlatList data={driverData.ratings} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.ratingContainer}>
            <Text style={styles.ratingUser}>Rated by: {item.userName}</Text>
            <Text style={styles.ratingDate}>{item.date}</Text>
            <Text style={styles.ratingStars}>Stars: {item.stars}</Text>
            <Text style={styles.ratingMessage}>{item.message}</Text>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  profileContainer: {
    alignItems: 'center',
    margin: 20
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
  profileEmail: {
    fontSize: 16,
    color: '#888',
    marginTop: 5
  },
  profileRating: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10
  },
  ratingContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    margin: 10
  },
  ratingUser: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  ratingDate: {
    fontSize: 14,
    color: '#888',
    marginTop: 5
  },
  ratingStars: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10
  },
  ratingMessage: {
    fontSize: 16,
    marginTop: 10
  }
});
export default DriverScreen;