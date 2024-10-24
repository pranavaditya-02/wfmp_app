import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FolderCard from '../components/FolderCard';
import DocumentCard from '../components/DocumentCard';
import Header from '../components/Header';
import folders from '../../data/folders.json';  // Adjust the path based on your project structure
import documents from '../../data/documents.json'; // Adjust the path based on your project structure

// Function to format the count (adds leading zero if < 9)
const formatCount = (count) => count.toString().padStart(2, '0');

const DocumentsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Add the Header component at the top */}
      <Header title="Documents" /> 

      {/* Folder Section */}
      <Text style={styles.sectionTitle}>{`${formatCount(folders.length)} Folders`}</Text>
      <FlatList
        data={folders}
        renderItem={({ item }) => <FolderCard folder={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />

      {/* Document Section */}
      <Text style={styles.sectionTitle}>{`${formatCount(documents.length)} Documents`}</Text>
      <FlatList
        data={documents}
        renderItem={({ item }) => <DocumentCard document={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 16,
    color: "#4E585E",
  },
});

export default DocumentsScreen;
