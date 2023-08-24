import React from 'react';
import { SafeAreaView, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
const banks = [{
  id: '1',
  name: 'Bank 1'
}, {
  id: '2',
  name: 'Bank 2'
}, {
  id: '3',
  name: 'Bank 3'
}, {
  id: '4',
  name: 'Bank 4'
}, {
  id: '5',
  name: 'Bank 5'
}];

const BankScreen = ({
  navigation
}) => {
  const [search, setSearch] = React.useState('');

  const renderItem = ({
    item
  }) => <TouchableOpacity style={styles.item} onPress={() => {
    navigation.navigate("ScreenAI12");
  }}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Select Your Bank</Text>
      <TextInput style={styles.input} onChangeText={setSearch} value={search} placeholder="Search" />
      <FlatList data={banks} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  title: {
    fontSize: 18
  }
});
export default BankScreen;