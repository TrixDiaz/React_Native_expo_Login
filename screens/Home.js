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
          Login to Checkout the new updates, See you There!
        </Text>
        <View style={{ flexDirection: "row",}}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText2}>Register</Text>
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
    marginTop: 150,
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
  },
  subtitle: {
    marginVertical: 50,
    fontSize: 20,
    color: "black",
    textAlign: "center",
    marginHorizontal: 40,
  },
  button1:{
    backgroundColor: 'darkBlue',
    borderRadius: 10,
    paddingHorizontal: 60,
    paddingVertical: 15,
  },
  buttonText1:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button2:{
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 60,
    paddingVertical: 15,
  },
  buttonText2:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
