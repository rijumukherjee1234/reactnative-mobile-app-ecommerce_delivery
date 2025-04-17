import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/loginscreen";
import Registration from "../screens/Registrationscreen"

const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={Registration}  />
        
      </Stack.Navigator>
    );
  };
  
  export default AuthStack;