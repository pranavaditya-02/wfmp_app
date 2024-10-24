// src/screens/DocumentsScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FolderCard from '../components/FolderCard';
import DocumentCard from '../components/DocumentCard';
import Header from '../components/Header'; // Importing the header component

const folders = [
  { id: '1', name: 'Folder 01', documents: '04 documents' },
  { id: '2', name: 'Folder 02', documents: '02 documents' },
  { id: '3', name: 'Folder 01', documents: '04 documents' },
  { id: '4', name: 'Folder 02', documents: '02 documents' }
];

const documents = [
  { id: '1', title: 'Document 02', date: '12/02/23' },
  { id: '2', title: 'Document 03', date: '10/01/23' },
  { id: '3', title: 'Document 04', date: '24/01/23' }
];

const DocumentsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Add the Header component at the top */}
      <Header title="Documents" /> 

      {/* Folder Section */}
      <Text style={styles.sectionTitle}>04 Folders</Text>
      <FlatList
        data={folders}
        renderItem={({ item }) => <FolderCard folder={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />

      {/* Document Section */}
      <Text style={styles.sectionTitle}>03 Documents</Text>
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
    marginHorizontal:16,
    color:"#4E585E"
  },
 
});

export default DocumentsScreen;
