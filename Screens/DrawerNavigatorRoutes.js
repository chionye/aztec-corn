/** @format */
import "react-native-gesture-handler";

import * as React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import RegisterScreen from "./RegisterScreen";
import HomeScreen from "./DrawerScreens/HomeScreen";
import ProfileScreen from "./ProfileScreen";
import ClientDetails from "./ClientDetails";
import BookRoom from "./BookRoom";

// Import Custom Sidebar
import CustomSidebarMenu from "./CustomSidebarMenu";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function FirstScreenStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          //Set Header Title
          title: "",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerBackground: () => (
            <Image
              style={StyleSheet.absoluteFill}
              source={require("../Image/bg.png")}
            />
          )
        }}
      />
    </Stack.Navigator>
  );
}

function SecondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#f4511e", //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}>
      <Stack.Screen
        name='RegisterScreen'
        component={RegisterScreen}
        options={{
          title: "Second Page", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function Root() {
  return (
    <Drawer.Navigator
        screenOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name='Home'
          options={{ headerShown: false }}
          component={FirstScreenStack}
        />
        <Drawer.Screen
          name='ProfileScreen'
          options={{ headerShown: false }}
          component={ProfileScreen}
        />
        <Stack.Screen name="ClientDetails" component={ClientDetails} options={{ headerShown: false }}/>
        <Stack.Screen name="BookRoom" component={BookRoom} options={{ headerShown: false }}/>
      </Drawer.Navigator>
  );
}

function DrawerNavigatorRoutes() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigatorRoutes;
