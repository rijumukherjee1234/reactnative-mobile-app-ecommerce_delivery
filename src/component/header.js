// import Authnavigation from "../src/navigation/authnavigate";
// import Appnavigate from "../src/navigation/appnavigate";
// import { useSelector } from 'react-redux';
// import { LinearGradient } from 'expo-linear-gradient';
import globalstyle from '../style/globalStyles';
import {View, Text, Image, error, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
//
const header = () => {
  return (
    <View >
       <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
      }}>
      <View style={globalstyle.welcomeView}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="person-circle-outline" size={50} color="#444" />
          <View style={{marginLeft: responsiveHeight(1)}}>
            <Text style={{marginTop: responsiveHeight(0.7), fontSize: 14}}>
              Hello,
            </Text>
            <Text style={{fontSize: 16}}>Riju Mukherje</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '60%',
          marginLeft: responsiveHeight(7),
          marginTop: responsiveHeight(6.5),
        }}>
        <Icon name="heart-outline" size={24} color="#444" />
        <Icon name="notifications-outline" size={24} color="#444" />
        <Icon name="cart-outline" size={24} color="#444" />
      </View>
    </View>
    </View>
   
  );
};

export default header;
