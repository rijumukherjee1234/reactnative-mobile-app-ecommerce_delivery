import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const InputField = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  errorMessage,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor="#999"
      />
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginTop: responsiveHeight(2),
  },
  label: {
    marginBottom: 5,
    fontWeight: '500',
    color: '#333',
    marginLeft: responsiveWidth(2),
    color:'#9f53f5'
  },
  input: {
    width: responsiveWidth(92),            // slightly wider for a cleaner look
    backgroundColor: '#f0f0f0',            // softer grey for a modern feel
    alignSelf: 'center',                   // centers input without needing marginLeft
    marginTop: responsiveHeight(2),        // better spacing from top
    borderRadius: responsiveWidth(2),      // smooth rounded edges
    paddingHorizontal: responsiveWidth(4), // horizontal padding for balanced left/right space
    paddingVertical: responsiveHeight(1.6),// vertical padding for touch-friendly height
    color: '#000',
    fontWeight: '500',                     // lighter than bold for readability
    fontSize: 16,                          // good default for input text
    borderWidth: 1,
    borderColor: '#ccc',                   // subtle border for structure
  },
  
  inputFocused: {
    borderColor: '#007AFF',
  },
  inputError: {
    borderColor: '#FF3B30',
  },
  error: {
    marginTop: 5,
    color: '#FF3B30',
    fontSize: 14,
  },
});

export default InputField;
