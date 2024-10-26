import React from 'react';
import { View, Text, StyleSheet,} from 'react-native';

const CardHeader = ({ title, badgeCount, RightArrowIcon }) => {
  const formattedBadgeCount = badgeCount < 10 ? `0${badgeCount}` : badgeCount;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.badgeContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{formattedBadgeCount}</Text>
        </View>
      </View>
      <View style={styles.arrowContainer}>
        {RightArrowIcon && <RightArrowIcon style={styles.rightArrow} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    //    paddingHorizontal: 16,
    // paddingVertical:20, // Optional: Add horizontal padding
 
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
  
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    
  },
  badgeContainer: {
    marginLeft: 10,
  },
  badge: {
    backgroundColor: '#D7E3FF',
    borderRadius: 14,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  badgeText: {
    fontSize: 12,
    color: '#0C356A',
    fontWeight: 'bold',
  },
  arrowContainer: {
    marginLeft: 'auto', 
  },
  rightArrow: {
    width: 24, 
    height: 24, 
  },
});

export default CardHeader;