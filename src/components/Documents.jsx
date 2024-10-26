import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
// Import your TitleCount and RightArrow components/icons here
// import TitleCount from './path/to/TitleCount';
// import RightArrow from './path/to/RightArrow';

const Documents = ({ badgeCount = 26, navigateToDocuments }) => (
  <View style={styles.section}>
    <TouchableOpacity
      onPress={navigateToDocuments}
      style={styles.touchableContainer} // Style added for height control
    >
      <TitleCount
        title="Documents"
        badgeCount={badgeCount}
        RightArrowIcon={RightArrow}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    margin: 16,
    marginBottom: -2,
    height: 100,
    justifyContent: 'center', // Centers the content vertically
  },
  touchableContainer: {
    height: '100%', // Fills the section height
    justifyContent: 'center', // Centers the content inside TouchableOpacity
  },
});

export default Documents;
