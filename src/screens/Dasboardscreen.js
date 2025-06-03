import React, { useState } from 'react';
import { View, Text,Image ,error,TouchableOpacity} from 'react-native';
import Search from "../component/searchbar"
import globalstyle from "../style/globalStyles"
import InputField from '../component/inputFile';
import Button from "../component/Button";
import { useNavigation } from '@react-navigation/native';
import Header from "../component/header";
import Productreturn from '../component/productreturn';
// import { Button, Input } from 'react-native-elements';
const DashboardScreen = () => {
 

  

  return (
    <View>
       <View style={globalstyle.card} >
      <Header />
      <Search />
     
  {/* <Text style={[globalstyle.welcomeText,{alignItems: 'center'}]}>
    Welcome To Dashboard
  </Text> */}

 
</View>
<View>
   <Productreturn />
</View>
    </View>
   
  );
};

export default DashboardScreen;
