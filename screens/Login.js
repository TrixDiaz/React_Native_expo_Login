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

import FlatButton from "./shared/buttons/button";
import mobileBG from "./assets/mobileBG.png";
import Logo from "./assets/Logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // handle login logic here
  };

  return (
    <ImageBackground source={mobileBG} style={styles.container}>
      <View style={styles.containerV}>
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
      <Image source={Logo} style={styles.logo} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  containerV: {
    marginTop: 200,
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
    zIndex: 1,
    width: 200,
    height: 200,
    marginLeft: 200,
    marginTop: 50,
  },
});

export default Login;
