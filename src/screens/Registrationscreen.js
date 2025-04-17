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
  
const loginNNavigate =(()=>{
  navigation.navigate('Login');
})
  return (
    <View style={{ alignItems: 'center',backgroundColor:"#6AoDAD" }}>
  <Text style={[globalstyle.registration,{ color: "#6333c4"}]}>
    Welcome To Registration Page 
  </Text>

 <Text style={[globalstyle.loginText, { color: "#6333c4"}]}>
 Please enter your detailes to get started
  </Text>
  <InputField
        label="User Name"
        placeholder="Enter Your Name"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        errorMessage={!email && error ? error : ''}
      />
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
       <InputField
        label="Re Enter Password"
        placeholder="Enter Your password"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        errorMessage={!email && error ? error : ''}
      />
      <Button 
      title="Registration"
      />

<Text style={[globalstyle.loginText]}>
 Already Have An Account? <Text style={globalstyle.register} onPress={loginNNavigate}>Login Now</Text>
      </Text>
</View>
  );
};

export default LoginScreen;
