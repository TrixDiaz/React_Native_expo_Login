import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";

import FlatButton from  "../shared/buttons/button"

import Logo from "../assets/login.jpg";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // handle login logic here
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} />
      <Text style={styles.title}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Student Number"
        placeholderTextColor="white"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        placeholderTextColor="white"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <FlatButton text="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  input: {
    width: 320,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 10,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Login;
