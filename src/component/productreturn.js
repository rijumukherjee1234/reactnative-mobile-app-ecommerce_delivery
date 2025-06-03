import React from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const productreturn = () => {
  return (
    <View style={{ alignItems: 'center', marginTop: responsiveHeight(2) }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
        
        {/* 7 Days Return */}
        <View style={{ alignItems: 'center', marginHorizontal: responsiveHeight(1) }}>
          <MaterialCommunityIcons name="autorenew" size={24} color="purple" />
          <Text style={{ fontSize: responsiveFontSize(1.5), textAlign: 'center' }}>
            7 Days{'\n'}Easy Return
          </Text>
        </View>

        {/* Cash on Delivery */}
        <View style={{ alignItems: 'center', marginHorizontal: responsiveHeight(1) }}>
          <MaterialIcons name="local-atm" size={24} color="green" />
          <Text style={{ fontSize: responsiveFontSize(1.5), textAlign: 'center' }}>
            Cash on{'\n'}Delivery
          </Text>
        </View>

        {/* Lowest Price */}
        <View style={{ alignItems: 'center', marginHorizontal: responsiveHeight(1) }}>
          <MaterialIcons name="price-check" size={24} color="orange" />
          <Text style={{ fontSize: responsiveFontSize(1.5), textAlign: 'center' }}>
            Lowest{'\n'}Price
          </Text>
        </View>
      </View>
    </View>
  );
};

export default productreturn;
