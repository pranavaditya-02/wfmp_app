import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import { Card } from 'react-native-elements';

const FolderCard = ({ folder }) => {
    return (
      <Card containerStyle={styles.folderCard}>
       
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMFgOTzXFcygcpN13gzzVZIthZHdu8Fmx52qtf9JlDgtCambv' }} // Replace with your folder icon URL
          style={styles.icon}
        />
        <Text style={styles.folderName}>{folder.name}</Text>
        <Text style={styles.folderDetails}>{folder.documents}</Text>
      </Card>
    );
  };
  
  

const styles = StyleSheet.create({
  folderCard: {
    width: '45%', // To make it fit in a grid of two columns
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    margin: 10, 
    borderWidth:1,
    borderColor:'#fff',
  },
  content: {
    alignItems: 'flex-start', // Aligns text and icon to the start
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  folderName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#222B45', // Darker shade for bold text
  },
  folderDetails: {
    fontSize: 14,
    color: '#8F9BB3', // Light gray for details
    marginTop: 4,
  },
});

export default FolderCard;
