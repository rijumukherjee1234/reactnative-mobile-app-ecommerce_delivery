import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboardscreen from "../screens/Dasboardscreen";


const Stack = createNativeStackNavigator();
const appnavigate = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dashboard" component={Dashboardscreen} />
   
      </Stack.Navigator>
    );
  };
  
  export default appnavigate;