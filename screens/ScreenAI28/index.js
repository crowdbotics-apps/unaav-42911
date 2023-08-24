import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ReportScreen = () => {
  const [selectedReason, setSelectedReason] = useState(null);
  const [otherReason, setOtherReason] = useState('');
  const reasons = ['Spam', 'Pornography', 'Hatred and bullying', 'Self-harm', 'Violent, gory, and harmful content', 'Child porn', 'Illegal activities (e.g. drug use)', 'Deceptive content', 'Copyright and trademark infringement', 'Other'];

  const handleReport = () => {// Handle report logic here
  };

  const handleCancel = () => {// Handle cancel logic here
  };

  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Why are you reporting this?</Text>
      {reasons.map((reason, index) => <TouchableOpacity key={index} style={styles.reason} onPress={() => setSelectedReason(reason)}>
          <Text style={selectedReason === reason ? styles.selectedReason : styles.reasonText}>{reason}</Text>
        </TouchableOpacity>)}
      {selectedReason === 'Other' && <TextInput style={styles.input} onChangeText={setOtherReason} value={otherReason} placeholder="Please specify" />}
      <Button title="Report" onPress={handleReport} />
      <Button title="Cancel" onPress={handleCancel} color="red" />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  reason: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5
  },
  reasonText: {
    fontSize: 16
  },
  selectedReason: {
    fontSize: 16,
    color: 'blue'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20
  }
});
export default ReportScreen;