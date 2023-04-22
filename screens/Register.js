import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FlatButton from "../shared/buttons/button";
import laptop from "../assets/laptop.jpg"


 function RegistrationForm() {
  const navigation = useNavigation();
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
    <SafeAreaView style={styles.container}>
      <Image source={laptop} style={styles.laptop}></Image>
      <View>
        <Text style={styles.title}>REGISTER</Text>
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
        <Text
          style={{
            alignSelf: "center",
            paddingTop: 20,
            textDecorationLine: "underline",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          Already have an Account
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FAF9FF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  input: {
    height: 40,
    width: 320,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  laptop: {
    width: 300,
    height: 150,
  },
});

export default RegistrationForm;