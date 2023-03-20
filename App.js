/** @format */

import React, { useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { AppContext } from "./src/utils/AppContext";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Routes from "./src/routes";

export default App = () => {
  const AppStack = createStackNavigator();
  const TabStack = createBottomTabNavigator();
  const [mail, setMail] = useState(null)

  const changeMail = (e) => setMail(e)

  return (
    <PaperProvider>
      <AppContext.Provider
        value={{
          app: AppStack,
          tab: TabStack,
          userEmail: mail,
          setGlobalMail: changeMail,
        }}>
        <Routes />
      </AppContext.Provider>
    </PaperProvider>
  );
};
