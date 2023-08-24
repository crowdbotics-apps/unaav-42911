import React from "react";
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const ScreenComponent = () => {
  const dummyData = {
    sentDate: "2021-09-01",
    status: "Awaiting for Admin response",
    accountStatus: "Account accepted"
  };
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Background check results</Text>
        <Text style={styles.subtitle}>
          Sent to admin on- {dummyData.sentDate}
        </Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.status}>Status</Text>
        <Text style={styles.statusText}>{dummyData.status}</Text>
      </View>
      <View style={styles.accountStatusContainer}>
        <Text style={styles.accountStatus}>{dummyData.accountStatus}</Text>
        <TouchableOpacity style={styles.button}>
          <TextInput style={styles.buttonText} editable={false} value="Continue" />
        </TouchableOpacity>
      </View>
      <View style={styles.rejectedContainer}>
        <Text style={styles.rejected}>Account rejected</Text>
        <Button title="Log out" onPress={() => {}} />
      </View>
      <Image style={styles.image} source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5"
  },
  header: {
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 18,
    color: "#888"
  },
  statusContainer: {
    marginBottom: 20
  },
  status: {
    fontSize: 20,
    fontWeight: "bold"
  },
  statusText: {
    fontSize: 18,
    color: "#888"
  },
  accountStatusContainer: {
    marginBottom: 20
  },
  accountStatus: {
    fontSize: 18,
    color: "#888"
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  },
  rejectedContainer: {
    marginBottom: 20
  },
  rejected: {
    fontSize: 18,
    color: "#888"
  },
  image: {
    width: "100%",
    height: 200
  }
});
export default ScreenComponent;