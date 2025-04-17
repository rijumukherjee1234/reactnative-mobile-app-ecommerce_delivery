// styles/globalStyles.js
import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions';

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
   
  },
  headerContainer: {
    marginTop: responsiveHeight(1.8),
    paddingHorizontal: responsiveWidth(8),
    width: responsiveWidth(100),  
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(5),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    padding: responsiveWidth(3),
  },
  welcomeView: {
    flex: 1,
    marginLeft: responsiveWidth(4),
  },
  welcomeheaderText: {
    fontSize: responsiveFontSize(2.4),
    fontWeight: '600',
    color: '#4CAF50',
  },
  employeeText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
    color: '#757575',
    marginTop: responsiveHeight(0.3),
  },
  
});

export default globalStyles;
