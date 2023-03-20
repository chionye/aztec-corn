/** @format */

// Import React and Component
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import { useTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../../components/Button";

let ScreenHeight = Dimensions.get("window").height;
const SplashScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
    },
    text: {
      color: "#000",
      fontSize: 13,
      color: "#1434A4",
      marginBottom: 20,
    },
    view: {
      padding: 10,
      width: "100%",
    },
  });

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/silver.jpg")}
        style={{
          width: "100%",
          resizeMode: "contain",
          height: ScreenHeight / 1.45,
        }}
      />
      <View style={styles.view}>
        <Text style={styles.text}>
          Silver Horizon mobile app has been upgraded to offer more options such
          as Touch ID login and credit card account overview. Enjoy a superior
          banking experience on the go!
        </Text>
        <Button
          text='Next'
          size='large'
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
