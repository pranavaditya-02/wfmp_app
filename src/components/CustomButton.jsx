import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import DownArrow from '../assets/icons/DownArrow';

const CustomButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
      <DownArrow />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 2,
    borderColor: '#002A6B',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    height: 45,
    width: 75,
    marginLeft: 95,
  },
  buttonText: {
    color: '#002A6B',
    fontSize: 14,
    marginRight: 8,
  },
});

export default CustomButton;