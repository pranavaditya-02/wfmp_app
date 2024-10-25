import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackArrow from '../assets/icons/Backarrow'; 

const Header = ({ title }) => { 
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <BackArrow /> 
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
     paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
    height: 50, 
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1d3c6a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily:"Poppins-SemiBold",
    marginLeft: 12,
    color: '#333', 
  },
});

export default Header;
