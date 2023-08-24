import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Picker, StyleSheet } from "react-native";

const DriverScreen = () => {
  const navigation = useNavigation();
  const [language, setLanguage] = useState("english");
  const [gender, setGender] = useState("male");
  return <SafeAreaView style={styles.container}>
      <View style={styles.ruleContainer}>
        <Text style={styles.ruleText}>Rule 1</Text>
        <Text style={styles.ruleText}>Rule 2</Text>
        <Text style={styles.ruleText}>Rule 3</Text>
      </View>
      <Picker selectedValue={language} style={styles.picker} onValueChange={itemValue => setLanguage(itemValue)}>
        <Picker.Item label="English" value="english" />
        <Picker.Item label="Spanish" value="spanish" />
        <Picker.Item label="French" value="french" />
      </Picker>
      <Picker selectedValue={gender} style={styles.picker} onValueChange={itemValue => setGender(itemValue)}>
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI7");
    }}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  ruleContainer: {
    marginBottom: 20
  },
  ruleText: {
    fontSize: 16,
    marginBottom: 10
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 20
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16
  }
});
export default DriverScreen;