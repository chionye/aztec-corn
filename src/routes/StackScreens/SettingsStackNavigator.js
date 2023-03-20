/** @format */

import React, { useContext } from "react";
import Settings from "../../screens/settings/Settings";
import Profile from "../../screens/settings/Profile";
import Security from "../../screens/settings/Security";
import Legal from "../../screens/home/Legal";
import { StackScreenOptions } from "../../utils/Functions";
import { AppContext } from "../../utils/AppContext";

export default SettingsStackNavigator = () => {
  const stack = useContext(AppContext);
  const AppStack = stack.app;

  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name='Settings'
        component={Settings}
        options={StackScreenOptions(true, "Settings")}
      />
      <AppStack.Screen
        name='Profile'
        component={Profile}
        options={StackScreenOptions(false)}
      />
      <AppStack.Screen
        name='Security'
        component={Security}
        options={StackScreenOptions(true, "Security")}
      />
      <AppStack.Screen
        name='Legal'
        component={Legal}
        options={StackScreenOptions(true, "Legal")}
      />
    </AppStack.Navigator>
  );
};
