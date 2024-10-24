import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import members from '../../data/members.json'; // Import the JSON data

// Get screen width to adjust image sizes dynamically
const { width } = Dimensions.get('window');
const imageSize = width * 0.12; // Adjust image size to be 12% of the screen width

const MemberList = () => {
  const [showMore, setShowMore] = useState(false);

  const visibleMembers = showMore ? members : members.slice(0, 2);
  const extraMembersCount = members.length - 2;

  return (
    <View style={styles.section}>
      <View style={styles.headerContainer}>
        <Text style={styles.sectionTitle}>Users</Text>
        <View style={styles.imageContainer}>
          {visibleMembers.map((item, index) => (
            <Image
              key={item.id}
              source={{ uri: item.image }}
              style={[ 
                styles.memberImage,
                { marginLeft: index > 0 ? -imageSize / 3 : 0 }, // Adjust margin for overlap
              ]}
            />
          ))}
          {extraMembersCount > 0 && !showMore && (
            <TouchableOpacity onPress={() => setShowMore(true)}>
              <View style={[styles.extraMembers, { marginLeft: -imageSize / 3 }]}>
                <Text style={styles.extraText}>+{extraMembersCount}</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
   padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: '#fff',
    height: 80,
    marginTop:10,
    width: 330,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#02111A',
    marginRight: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto', // Align images to the right
  },
  memberImage: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2, // Circle shape
    borderWidth: 2,
    borderColor: '#fff',
  },
  extraMembers: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    backgroundColor: '#F0F3F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  extraText: {
    color: '#02111A',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default MemberList;