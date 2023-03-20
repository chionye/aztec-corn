/** @format */

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Keyboard,
  SafeAreaView,
  Dimensions,
  Alert,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Loader from "../../components/Loader";
import Api from "../../utils/Api";
import { Greetings } from "../../utils/Functions";
import Button from "../../components/Button";
import * as LocalAuthentication from "expo-local-authentication";
import Storage from "../../utils/Storage";

let ScreenHeight = Dimensions.get("window").height;

const Login = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isBiometricOn, setIsBiometricOn] = useState(false);

  const handleSubmitPress = () => {
    setErrortext("");
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }
    setLoading(true);
    let mail = email != ""? email: userEmail;
    let dataToSend = {
      formId: "loginform",
      email: mail,
      password: userPassword,
    };

    Api(dataToSend)
      .then((json) => {
        setLoading(false);
        json = JSON.parse(json);
        console.log(json)
        if (json.output === "success") {
          Storage.storeData("login", { success: true, email: mail });
          navigation.replace("Confirm", {
            email: userEmail,
          });
        } else {
          Alert.alert(json.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateSecureTextEntry = () => {
    let currentSecureEntry = secureTextEntry;
    setSecureTextEntry(!currentSecureEntry);
  };

  // Check if hardware supports biometrics
  useEffect(() => {
    Storage.getData("biometrics")
      .then((data) => data)
      .then((value) => {
        value = JSON.parse(value);
        if (!value) {
          async () => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible);
          };
          setIsBiometricOn(value);
          Storage.getData("login")
            .then((data) => data)
            .then((value) => {
              if (value) {
                value = JSON.parse(value);
                console.log(email, "test")
                if(value.email){
                  setEmail(value.email);
                };
              }
            });
        }
      });
  }, [isBiometricOn]);

  const fallBackToDefaultAuth = () => {
    console.log("fall back to password authentication");
  };

  const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      },
    ]);
  };

  const handleBiometricAuth = async () => {
    // Check if hardware supports biometrics
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    // Fallback to default authentication method (password) if Fingerprint is not available
    if (!isBiometricAvailable)
      return alertComponent(
        "Please enter your password",
        "Biometric Authentication not supported",
        "OK",
        () => fallBackToDefaultAuth()
      );

    // Check Biometrics types available (Fingerprint, Facial recognition, Iris recognition)
    let supportedBiometrics;
    if (isBiometricAvailable)
      supportedBiometrics =
        await LocalAuthentication.supportedAuthenticationTypesAsync();

    // Check Biometrics are saved locally in user's device
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics)
      return alertComponent(
        "Biometric record not found",
        "Please login with your password",
        "OK",
        () => fallBackToDefaultAuth()
      );

    // Authenticate use with Biometrics (Fingerprint, Facial recognition, Iris recognition)
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login with Biometrics",
      cancelLabel: "Cancel",
      disableDeviceFallback: true,
    });
    // Log the user in on success
    if (biometricAuth.success) {
      Storage.storeData("login", { success: true, email: email });
      navigation.replace("Confirm", {
        email: email,
      });
    }
    if (biometricAuth.error == "lockout") {
      return alertComponent("Sorry", biometricAuth.warning, "OK", () => {
        setIsBiometricOn(false);
        Storage.storeData("biometrics", false);
        console.log(isBiometricOn);
      });
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Loader loading={loading} />
          <View style={styles.header}>
            <Text style={styles.heading}>
              <Greetings />
            </Text>
          </View>
          <View style={styles.card}>
            {!isBiometricOn && email != undefined && email != "" ? (
              <>
                <View style={styles.passwordSection}>
                  <TextInput
                    style={styles.input1}
                    placeholder='Password'
                    onChangeText={(UserPassword) =>
                      setUserPassword(UserPassword)
                    }
                    secureTextEntry={secureTextEntry ? true : false}
                    placeholderTextColor='#8b9cb5'
                    keyboardType='default'
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false}
                    underlineColorAndroid='#f000'
                    returnKeyType='next'
                    onFocus={handleBiometricAuth}
                  />
                  <TouchableOpacity onPress={() => updateSecureTextEntry()}>
                    {secureTextEntry ? (
                      <Feather name='eye-off' color='#ffffff' size={20} />
                    ) : (
                      <Feather name='eye' color='#ffffff' size={20} />
                    )}
                  </TouchableOpacity>
                </View>
                <Button
                  text='Login'
                  size='large'
                  onPress={handleBiometricAuth}
                />
              </>
            ) : (
              <>
                <TextInput
                  style={styles.input}
                  placeholder='Email'
                  onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                  placeholderTextColor='#8b9cb5'
                  autoCapitalize='none'
                  keyboardType='email-address'
                  returnKeyType='next'
                  underlineColorAndroid='#f000'
                  blurOnSubmit={false}
                />
                <View style={styles.passwordSection}>
                  <TextInput
                    style={styles.input1}
                    placeholder='Password'
                    onChangeText={(UserPassword) =>
                      setUserPassword(UserPassword)
                    }
                    secureTextEntry={secureTextEntry ? true : false}
                    placeholderTextColor='#8b9cb5'
                    keyboardType='default'
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false}
                    underlineColorAndroid='#f000'
                    returnKeyType='next'
                  />
                  <TouchableOpacity onPress={() => updateSecureTextEntry()}>
                    {secureTextEntry ? (
                      <Feather name='eye-off' color='#ffffff' size={20} />
                    ) : (
                      <Feather name='eye' color='#ffffff' size={20} />
                    )}
                  </TouchableOpacity>
                </View>
                <Button text='Login' size='large' onPress={handleSubmitPress} />
              </>
            )}

            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => navigation.navigate("SplashScreen")}>
                <MaterialIcons name='phone' size={22} color='#ffffff' />
                <Text style={styles.buttonText}>CONTACT</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button1}
                onPress={() => navigation.navigate("Success")}>
                <MaterialIcons name='home' size={22} color='#ffffff' />
                <Text style={styles.buttonText}>ATM/BRANCH</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contain}></View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{ alignItems: "flex-end" }}>
            <Image
              style={styles.stretch}
              source={require("../../../assets/old.jpg")}
            />
            <Image
              style={styles.stretch}
              source={require("../../../assets/kam.jpg")}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1434A4",
    alignItems: "center",
    justifyContent: "center",
    height: ScreenHeight,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 150,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  heading: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#1434A4",
    padding: 10,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFFFFF66",
    borderRadius: 5,
    padding: 20,
    marginVertical: 10,
    width: "100%",
    color: "white",
  },
  input1: {
    width: "95%",
    color: "white",
  },
  passwordSection: {
    borderWidth: 1,
    borderColor: "#FFFFFF66",
    borderRadius: 5,
    padding: 20,
    marginVertical: 10,
    width: "100%",
    flexDirection: "row",
  },
  createAccountButton: {
    marginTop: 20,
  },
  createAccountButtonText: {
    color: "#20B2AA",
    fontSize: 12,
    fontWeight: "bold",
  },
  actions: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    borderBottomWidth: 0.5,
    borderBottomColor: "#b3b3b3",
    padding: 40,
  },
  button2: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 120,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button1: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  stretch: {
    height: 200,
    resizeMode: "cover",
    width: 220,
  },
  contain: {
    backgroundColor: "#fff",
    alignItems: "flex-end",
  },
});

export default Login;
