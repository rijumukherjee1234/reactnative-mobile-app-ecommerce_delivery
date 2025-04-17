import React, { useState } from 'react';
import { View, Text,Image ,error,TouchableOpacity} from 'react-native';
import globalstyle from "../style/globalStyles"
import InputField from '../component/inputFile';
import Button from "../component/Button";
import { useNavigation } from '@react-navigation/native';
// import { Button, Input } from 'react-native-elements';
const LoginScreen = () => {
  const [email,setEmail] = useState()
  const [password,setpassword]= useState()
  const navigation = useNavigation();
  
const RegistrationNavigate =(()=>{
  navigation.navigate('Register');
})
  return (
    <View style={{ alignItems: 'center',backgroundColor:"#6AoDAD" }}>
  <Text style={[globalstyle.welcomeText,{ color: "#6333c4"}]}>
    Welcome To Ecommerce
  </Text>

  <Image
    source={require("../assets/project.png")}
    style={[globalstyle.logo]} // Ensure no top margin
  />
  <Text style={[globalstyle.loginText, { color: "#6333c4"}]}>
   Please Log In To Continue
  </Text>

  <InputField
        label="Email"
        placeholder="Enter Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        errorMessage={!email && error ? error : ''}
      />
       <InputField
        label="Password"
        placeholder="Enter Your Password"
        value={password}
        onChangeText={setpassword}
    
        errorMessage={!email && error ? error : ''}
      />
      <Button 
      title="Login"
      />
       <Text style={[globalstyle.loginText]}>
  New to this app? <Text style={globalstyle.register} onPress={RegistrationNavigate}>Registration Now</Text>
  </Text>
</View>
  );
};

export default LoginScreen;
