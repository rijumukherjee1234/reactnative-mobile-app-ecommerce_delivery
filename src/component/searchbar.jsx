import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MeeshoSearchBar = () => {
  return (
    <View style={styles.searchBar}>
       <Icon name="search" size={20} color="#666" />
          <TextInput
            placeholder="Search by Keyword or Product ID"
            style={styles.input}
          />
    </View>
  );
};

const styles = StyleSheet.create({
 searchBar: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#000',
  },
});

export default MeeshoSearchBar;
