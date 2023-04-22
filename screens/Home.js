import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import manOnTable from "../assets/manOnTable.jpg";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Image source={manOnTable} style={styles.image}></Image>
        <Text style={styles.title}>Welcome back you've been missed!</Text>
        <Text style={styles.subtitle}>
          Login to know the new updates, See you There!
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 50,
            marginVertical: 50,
          }}
        >
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonTextLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.buttonTextRegister}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  image: {
    marginTop: 70,
    marginBottom: 10,
    marginHorizontal: 30,
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 30,
    color: "blue",
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 30,
    marginVertical: 10,
  },
  subtitle: {
    marginVertical: 10,
    fontSize: 15,
    color: "black",
    textAlign: "center",
    marginHorizontal: 40,
  },
  buttonLogin: {
    backgroundColor: "#05BFDB",
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 15,
  },
  buttonTextLogin: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonRegister: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 15,
  },
  buttonTextRegister: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Home;
