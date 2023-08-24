import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, Button, StyleSheet } from 'react-native';

const AccountScreen = () => {
  const accounts = [{
    id: '1',
    name: 'Account 1',
    amount: '5000'
  }, {
    id: '2',
    name: 'Account 2',
    amount: '3000'
  }, {
    id: '3',
    name: 'Account 3',
    amount: '2000'
  }];
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Select Account</Text>
      </View>
      <FlatList data={accounts} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.accountItem}>
            <Image style={styles.accountImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <View style={styles.accountInfo}>
              <Text style={styles.accountName}>{item.name}</Text>
              <Text style={styles.accountAmount}>{item.amount} in the bank</Text>
            </View>
          </View>} />
      <View style={styles.defaultBank}>
        <Text style={styles.defaultBankText}>Default bank</Text>
      </View>
      <View style={styles.addButton}>
        <Button title="Add new bank" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  accountItem: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  accountImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20
  },
  accountInfo: {
    justifyContent: 'center'
  },
  accountName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  accountAmount: {
    fontSize: 16,
    color: '#757575'
  },
  defaultBank: {
    padding: 20
  },
  defaultBankText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  addButton: {
    padding: 20
  }
});
export default AccountScreen;