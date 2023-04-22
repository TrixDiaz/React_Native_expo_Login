import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
} from "react-native";

import FlatButton from "../shared/buttons/button";

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
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={Logo} style={styles.logo}></Image>
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

        <Text
          style={{ alignSelf: "center", paddingTop: 20, textDecorationLine: "underline"}}
          onPress={() => navigation.navigate("Register")}>
          Don't have an Account
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  logo: {
    width: 300,
    height: 150,
    paddingBottom: 10,
    marginBottom: 20,
    marginTop: -50,
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
});

export default Login;
