import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import assets from '../../data/assets.json'; // Ensure this path is correct based on your project structure

const { width } = Dimensions.get('window');
const imageSize = width * 0.25; 

const Asset = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Assets</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={assets} // Use the imported assets JSON
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.assetContainer}>
            <Image source={{ uri: item.image }} style={styles.assetImage} />
            <Text style={styles.assetName}>{item.name || "Unnamed Asset"}</Text>
          </View>
        )}
      />
    </View>
  );
};

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
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#02111A',
  },
  assetContainer: {
    alignItems: 'center',
    marginRight: 20,
    marginTop: 10, // Add space between the section title and images
  },
  assetImage: {
    width: imageSize, // Responsive width based on screen size
    height: imageSize, // Responsive height based on screen size
    borderRadius: 12, // Rounded corners
  },
  assetName: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default Asset;
