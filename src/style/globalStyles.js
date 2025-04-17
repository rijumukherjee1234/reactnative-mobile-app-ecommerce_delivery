// styles/globalStyles.js
import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const globalStyles = StyleSheet.create({
  welcomeText: {
    alignSelf: "center",
    marginTop: responsiveHeight(10),
    borderRadius: responsiveWidth(3),
    fontSize: 20,
    textAlign: 'center',
  },
  registration: {
    alignSelf: "center",
    marginTop: responsiveHeight(6),
    borderRadius: responsiveWidth(3),
    fontSize: 20,
    textAlign: 'center',
  },
  logo: {
    height: responsiveHeight(26), 
    marginTop: responsiveHeight(24),          // 30% height is usually enough
    width: responsiveWidth(40),             // Adjust width to maintain aspect ratio
    marginTop:8,           
    alignSelf: 'center',     
    marginTop: responsiveHeight(3),               // Center horizontally
            // Spacing from top
  },
  loginText: {
    borderRadius: responsiveWidth(8),
    fontSize: 13,
    marginTop: responsiveHeight(3),
    // textAlign: 'center',
  },
  register:{
    borderRadius: responsiveWidth(8),
    fontSize: 13,
    color: '#6333c4',
   
  }
  
});

export default globalStyles;
