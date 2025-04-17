// import Authnavigation from "../src/navigation/authnavigate";
// import Appnavigate from "../src/navigation/appnavigate";
// import { useSelector } from 'react-redux';
// import { LinearGradient } from 'expo-linear-gradient';
import globalstyle from "../style/globalStyles";
import { View, Text,Image ,error,TouchableOpacity} from 'react-native';
// 
const header = () => {
    
   
    return (
        <View style={globalstyle.headerContainer}>
        <View style={globalstyle.container}>
          <View style={globalstyle.welcomeView}>
            <Text style={globalstyle.welcomeheaderText}>Welcome</Text>
            <Text style={globalstyle.employeeText}>Riju</Text>
          </View>
  {/* <TouchableOpacity  onPress={handleProfile} >
          <LinearGradient colors={['#6a11cb', '#2575fc']} style={styles.profileCircle}>
                   <Text style={styles.profileInitial}>R</Text>
                 </LinearGradient>
          </TouchableOpacity>        */}
  
        </View>
      </View>
    );
  };
  
  export default header;