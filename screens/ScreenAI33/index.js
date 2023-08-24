import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Image, Alert } from 'react-native';

const PasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hideCurrentPassword, setHideCurrentPassword] = useState(true);
  const [hideNewPassword, setHideNewPassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const passwordStrength = password => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return regex.test(password);
  };

  const changePassword = () => {
    if (currentPassword !== 'dummyPassword') {
      Alert.alert('Error', 'Current password is incorrect');
    } else if (!passwordStrength(newPassword)) {
      Alert.alert('Error', 'New password does not meet the strength requirements');
    } else if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
    } else {
      Alert.alert('Success', 'Password changed successfully');
    }
  };

  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} secureTextEntry={hideCurrentPassword} onChangeText={setCurrentPassword} value={currentPassword} placeholder="Current Password" />
      <Button title={hideCurrentPassword ? "Show Password" : "Hide Password"} onPress={() => setHideCurrentPassword(!hideCurrentPassword)} />
      <TextInput style={styles.input} secureTextEntry={hideNewPassword} onChangeText={setNewPassword} value={newPassword} placeholder="New Password" />
      <Button title={hideNewPassword ? "Show Password" : "Hide Password"} onPress={() => setHideNewPassword(!hideNewPassword)} />
      <TextInput style={styles.input} secureTextEntry={hideConfirmPassword} onChangeText={setConfirmPassword} value={confirmPassword} placeholder="Confirm Password" />
      <Button title={hideConfirmPassword ? "Show Password" : "Hide Password"} onPress={() => setHideConfirmPassword(!hideConfirmPassword)} />
      <Button title="Change Password" onPress={changePassword} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    padding: 10
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  }
});
export default PasswordScreen;