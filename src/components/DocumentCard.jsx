// src/components/DocumentCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';

const DocumentCard = ({ document }) => {
  return (
    <Card containerStyle={styles.documentCard}>
      <View style={styles.documentContainer}>
        {/* Replace Icon with Image */}
        <Image
          source={{ uri: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.width-500.format-webp.webp' }} // Replace with your document icon URL
          style={styles.icon}
        />
        <View style={styles.documentInfo}>
          <Text style={styles.documentTitle}>{document.title}</Text>
          <Text style={styles.documentDate}>Created on {document.date}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  documentCard: {
    padding: 15,
    borderRadius: 10,
    borderWidth:1,
    borderColor:'#fff',
  },
  documentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  documentInfo: {
    marginLeft: 15,
  },
  documentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"black"
  },
  documentDate: {
    fontSize: 14,
    color: 'gray',
  },
});

export default DocumentCard;
