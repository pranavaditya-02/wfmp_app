import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';

const Assets = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Assets</Text>
    <ScrollView horizontal={true} style={styles.assetScroll}>
      <AssetItem name="JCB" imageUri="https://example.com/jcb.png" />
      <AssetItem name="Asset Name" />
      <AssetItem name="Laptop Dell" imageUri="https://example.com/laptop.png" />
    </ScrollView>
  </View>
);

const AssetItem = ({name, imageUri}) => (
  <View style={styles.assetItem}>
    {imageUri ? (
      <Image source={{uri: imageUri}} style={styles.assetImage} />
    ) : (
      <Image
        source={{uri: 'https://example.com/default.png'}}
        style={styles.assetImage}
      />
    )}
    <Text>{name}</Text>
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
  assetScroll: {marginTop: 8},
  assetItem: {alignItems: 'center', marginRight: 16},
  assetImage: {width: 50, height: 50},
});

export default Assets;
