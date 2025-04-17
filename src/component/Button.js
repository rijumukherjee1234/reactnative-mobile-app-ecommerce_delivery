import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const CustomButton = ({ onPress, title, style, textStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
      borderWidth: 1,
      borderColor: '#6833c4',
      width: responsiveWidth(60),
      paddingVertical: responsiveHeight(2), // Use paddingVertical for better vertical centering
      borderRadius: responsiveWidth(3),
      backgroundColor: '#6333c4',
      marginTop: responsiveHeight(1.7),
      marginLeft: responsiveWidth(2),
      alignItems: 'center',       // <-- horizontal centering
      justifyContent: 'center',   // <-- vertical centering
    },
  
    text: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
    },
  });
  
export default CustomButton;
