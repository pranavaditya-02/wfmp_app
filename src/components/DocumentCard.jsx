import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';

const DocumentCard = ({ document }) => {
  return (
    <Card containerStyle={styles.documentCard}>
      <View style={styles.documentContainer}>
        {/* Box Container for Icon */}
        <View style={styles.iconBox}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.width-500.format-webp.webp' }} // Replace with your document icon URL
            style={styles.icon}
          />
        </View>
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
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: '#fff',
    height: 80,
    width: 310,
  },
  documentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 50,   // Box size
    height: 50,  // Box size
    borderRadius: 12, // Rounded box corners
    backgroundColor: '#F0F3F6', // Box background color
    justifyContent: 'center', // Center the icon inside the box
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30, // Icon size inside the box
    resizeMode: 'contain',
  },
  documentInfo: {
    marginLeft: 15,
  },
  documentTitle: {
    fontSize: 16,
    fontWeight: '600', // Semi-bold for the title
    color: '#2e3a59',
  },
  documentDate: {
    fontSize: 14,
    color: '#8a94a6', // Subtle gray for the date text
    marginTop: 2,
  },
});

export default DocumentCard;
