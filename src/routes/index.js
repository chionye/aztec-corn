/** @format */

import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Login from "../screens/auth/Login";
import Confirm from "../screens/auth/Confirm";
import Account from "../screens/home/Account";
import ConfirmCode from "../screens/auth/ConfirmCode";
import SplashScreen from "../screens/auth/SplashScreen";
import Success from "../screens/misc/Success";
import Otp from "../screens/home/Otp";
import { AppContext } from "../utils/AppContext";
import { TabStackNavigator } from "./StackScreens/TabStackNavigator";

export default Routes = () => {
  const stack = useContext(AppContext);
  const AppStack = stack.app;

  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#1434A4' />
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name='SplashScreen' component={SplashScreen} />
        <AppStack.Screen name='Login' component={Login} />
        <AppStack.Screen name='Account' component={Account} />
        <AppStack.Screen name='ConfirmCode' component={ConfirmCode} />
        <AppStack.Screen name='Confirm' component={Confirm} />
        <AppStack.Screen name='Success' component={Success} />
        <AppStack.Screen name='Otp' component={Otp} />
        <AppStack.Screen name='Tabs' component={TabStackNavigator} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
