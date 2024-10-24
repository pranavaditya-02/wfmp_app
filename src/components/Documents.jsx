import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Documents = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Documents</Text>
    <TouchableOpacity style={styles.documentButton}>
      <Text style={styles.documentText}>26</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: {fontSize: 16, fontWeight: 'bold', marginBottom: 8},
  documentButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  documentText: {color: '#fff'},
});

export default Documents;
