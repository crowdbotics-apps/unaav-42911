import React, { useState } from 'react';
import { SafeAreaView, View, Text, Switch, Button, Alert, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [isPushEnabled, setIsPushEnabled] = useState(false);
  const [isEmailEnabled, setIsEmailEnabled] = useState(false);

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [{
      text: "Cancel",
      style: "cancel"
    }, {
      text: "OK",
      onPress: () => console.log("OK Pressed")
    }]);
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text>Push Notifications</Text>
        <Switch value={isPushEnabled} onValueChange={setIsPushEnabled} />
      </View>
      <View style={styles.row}>
        <Text>Email Notifications</Text>
        <Switch value={isEmailEnabled} onValueChange={setIsEmailEnabled} />
      </View>
      <Button title="My Bank Accounts" onPress={() => {}} />
      <Button title="Privacy Policy" onPress={() => {}} />
      <Button title="Terms and Conditions" onPress={() => {}} />
      <Button title="Change Password" onPress={() => {}} />
      <Button title="Support/Send Feedback" onPress={() => {}} />
      <Button title="Delete Account" onPress={() => {}} color="red" />
      <Button title="Logout" onPress={handleLogout} color="blue" />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  }
});
export default SettingsScreen;