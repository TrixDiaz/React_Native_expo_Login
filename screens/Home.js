import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaViewBase,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import manOnTable from "../assets/manOnTable.jpg";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Image source={manOnTable} style={styles.image}></Image>
        <Text style={styles.title}>Welcome back you've been missed!</Text>
        <Text style={styles.subtitle}>
          Login to know the new updates, See you There!
        </Text>
        <View style={{ flexDirection: "row", marginHorizontal: 30, marginVertical: 50, }}>
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonTextLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.buttonTextRegister}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  image: {
    marginTop: 120,
    marginBottom: 50,
    marginHorizontal: 50,
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 30,
    color: "blue",
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 30,
    marginVertical: 30,
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
    paddingHorizontal: 60,
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
    paddingHorizontal: 60,
    paddingVertical: 15,
  },
  buttonTextRegister: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});
