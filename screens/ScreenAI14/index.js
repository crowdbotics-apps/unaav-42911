import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';

const CardScreen = () => {
  const navigation = useNavigation();
  const cards = [{
    id: '1',
    cardNumber: '**** **** **** 1234'
  }, {
    id: '2',
    cardNumber: '**** **** **** 5678'
  }, {
    id: '3',
    cardNumber: '**** **** **** 9012'
  }];
  return <SafeAreaView style={_styles.ZJRImvwL}>
      <View style={_styles.YyMWSPvY}>
        <Text style={_styles.NVQNzjOt}>Amount to be authorised</Text>
        <Text style={_styles.UnyfkBqv}>Min amount</Text>

        <Text style={_styles.JgyzOtrK}>Use credit/debit card</Text>
        <FlatList data={cards} keyExtractor={item => item.id} renderItem={({
        item
      }) => <TouchableOpacity style={_styles.OiXLfvNJ}>
              <Text style={_styles.vEGZgsZP}>{item.cardNumber}</Text>
            </TouchableOpacity>} />

        <TouchableOpacity style={_styles.jtHXejVH} onPress={() => {
        navigation.navigate("ScreenAI15");
      }}>
          <Text style={_styles.elfcMTtC}>Add new card</Text>
        </TouchableOpacity>

        <TouchableOpacity style={_styles.iprUWGCy} onPress={() => {
        navigation.navigate("ScreenAI16");
      }}>
          <Text style={_styles.MOZuWcSc}>Pay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

export default CardScreen;

const _styles = StyleSheet.create({
  ZJRImvwL: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  YyMWSPvY: {
    padding: 20
  },
  NVQNzjOt: {
    fontSize: 24,
    fontWeight: "bold"
  },
  UnyfkBqv: {
    fontSize: 18,
    color: "#888",
    marginTop: 10
  },
  JgyzOtrK: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  OiXLfvNJ: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5
  },
  vEGZgsZP: {
    fontSize: 16
  },
  jtHXejVH: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#007bff",
    borderRadius: 5
  },
  elfcMTtC: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center"
  },
  iprUWGCy: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#28a745",
    borderRadius: 5
  },
  MOZuWcSc: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center"
  }
});