import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FlatButton from "../shared/buttons/button";

 function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const navigation = useNavigation();
    console.log(
      `Username: ${username}, Email: ${email}, Password: ${password}`
    );
    // Here you can perform your registration logic, such as calling an API endpoint
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <FlatButton text="Register" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 40,
    width: "100%",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default RegistrationForm;