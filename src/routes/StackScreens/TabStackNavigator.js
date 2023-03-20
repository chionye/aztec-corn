/** @format */

import React, { useContext } from "react";
import HomeStackNavigator from "./HomeStackNavigator";
import Transfers from "../../screens/home/Transfers";
import Deposits from "../../screens/home/Deposits";
import SettingsStackNavigator from "./SettingsStackNavigator";
import { StackScreenOptions, screenOptions } from "../../utils/Functions";
import { AppContext } from "../../utils/AppContext";

export const TabStackNavigator = () => {
  const stack = useContext(AppContext);
  const TabStack = stack.tab;

  return (
    <TabStack.Navigator screenOptions={screenOptions}>
      <TabStack.Screen
        name='Accounts'
        component={HomeStackNavigator}
        options={StackScreenOptions(false)}
      />
      <TabStack.Screen
        name='Transfers'
        component={Transfers}
        options={StackScreenOptions(true, "History")}
      />
      <TabStack.Screen
        name='Deposits'
        component={Deposits}
        options={StackScreenOptions(true, "Make a Transfer")}
      />
      <TabStack.Screen
        name='More'
        component={SettingsStackNavigator}
        options={StackScreenOptions(false)}
      />
    </TabStack.Navigator>
  );
};
