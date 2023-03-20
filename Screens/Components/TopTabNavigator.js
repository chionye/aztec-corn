import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Addiction from '../DrawerScreens/Addiction';
import Couple from '../DrawerScreens/Couple';
import Family from '../DrawerScreens/Family';
import colors from '../../assets/consts/colors';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();

const AddictionScreen = ({ }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Addiction'
        component={Addiction}
        options={{ headerShown: false, headerStyle: {
            backgroundColor: "powderblue",
          } }}
      />
    </Stack.Navigator>
  );
};

const CoupleScreen = ({ }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Couple'
        component={Couple}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const FamilyScreen = ({ }) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Family'
          component={Family}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

function TopTabNavigator({}) {
  return (
    
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { marginTop: 0},
      }}>
      <Tab.Screen name='Addiction' component={AddictionScreen} />
      <Tab.Screen name='Couple' component={CoupleScreen} />
      <Tab.Screen name='Family' component={FamilyScreen} />
    </Tab.Navigator>

    
  );
}

export default TopTabNavigator;