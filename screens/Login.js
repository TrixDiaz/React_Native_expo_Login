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
import * as Keychain from "react-native-keychain";
import Logo from "../assets/login.jpg";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      Keychain.setGenericPassword("token", token).then(() => {
        console.log("Token stored securely");
      });

      const response = await axios.post(
        "http://192.168.100.114:19000npm/api/apirequest/",
        {
          username,
          password,
        }
      );

      // Store the authentication token in app state or AsyncStorage
      const authToken = response.data.token;

      // Navigate to the app's main screen and pass the authentication token as a prop
      navigation.navigate("Dashboard", { authToken });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={Logo} style={styles.logo}></Image>
        <Text style={styles.title}>LOGIN</Text>
        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor="#B7B7B7"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          placeholderTextColor="#B7B7B7"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <FlatButton text="Login" onPress={handleLogin} />

        <Text
          style={{
            alignSelf: "center",
            paddingTop: 10,
            textDecorationLine: "underline",
          }}
          onPress={() => navigation.navigate("Register")}
        >
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
    marginLeft: 10,
    paddingBottom: 0,
    marginBottom: 10,
    marginTop: -50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  input: {
    width: 320,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
});

export default Login;
