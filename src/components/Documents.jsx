import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import RightArrow from '../assets/icons/RightArrow';
import CardHeader from './CardHeader';
import { useNavigation } from '@react-navigation/native';

const Documents = ({ badgeCount = 26 }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('DocumentsScreen');
  };

  return (
    <View style={styles.section}>
      <TouchableOpacity onPress={handlePress} style={styles.touchableContainer}>
        <CardHeader title="Documents" badgeCount={badgeCount} />
        <RightArrow style={styles.rightArrow} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    margin: 16,
    justifyContent: 'center',
  },
  touchableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightArrow: {
    width: 24,
    height: 24,
    marginLeft: 'auto', // Pushes arrow to the far right
  },
});

export default Documents;
