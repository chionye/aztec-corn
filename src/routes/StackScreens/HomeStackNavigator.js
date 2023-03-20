/** @format */

import React, { useContext } from "react";
import HomeScreen from "../../screens/home/HomeScreen";
import CardScreen from "../../screens/home/CardScreen";
import Products from "../../screens/home/Products";
import AccountDetails from "../../screens/home/AccountDetails";
import Notifications from "../../screens/misc/Notifications";
import Statement from "../../screens/home/Statement";
import { StackScreenOptions } from "../../utils/Functions";
import { AppContext } from "../../utils/AppContext";

export default HomeStackNavigator = () => {
  const stack = useContext(AppContext);
  const AppStack = stack.app;

  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name='Home'
        component={HomeScreen}
        options={StackScreenOptions(false)}
        initialParams={{ mail: null }}
      />
      <AppStack.Screen
        name='CardScreen'
        component={CardScreen}
        options={StackScreenOptions(true, "Card Management")}
      />
      <AppStack.Screen
        name='Products'
        component={Products}
        options={StackScreenOptions(true, "Product Management")}
      />
      <AppStack.Screen
        name='Account'
        component={AccountDetails}
        options={StackScreenOptions(true, "EveryDay Checking")}
      />
      <AppStack.Screen
        name='Statement'
        component={Statement}
        options={StackScreenOptions(true, "Generate Statement")}
      />
      <AppStack.Screen
        name='Notifications'
        component={Notifications}
        options={StackScreenOptions(true, "Notifications")}
      />
    </AppStack.Navigator>
  );
};
