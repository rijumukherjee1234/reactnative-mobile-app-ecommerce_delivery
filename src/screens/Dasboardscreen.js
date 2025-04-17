import React, { useState } from 'react';
import { View, Text,Image ,error,TouchableOpacity} from 'react-native';
import globalstyle from "../style/globalStyles"
import InputField from '../component/inputFile';
import Button from "../component/Button";
import { useNavigation } from '@react-navigation/native';
import Header from "../component/header"
// import { Button, Input } from 'react-native-elements';
const DashboardScreen = () => {
 

  

  return (
    <View style={{ alignItems: 'center'}}>
      <Header />
  <Text style={[globalstyle.welcomeText,{alignItems: 'center'}]}>
    Welcome To Dashboard
  </Text>

 
</View>
  );
};

export default DashboardScreen;
