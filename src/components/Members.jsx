import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import members from '../../data/members.json';
const { width } = Dimensions.get('window');
const imageSize = width * 0.12;

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
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    margin: 16,
    marginBottom:-2,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily:'Poppins-SemiBold',
    color: '#02111A',
    marginRight: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto', 
  },
  memberImage: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2, 
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
    fontFamily:'Poppins-SemiBold',
    fontSize:14,
  },
});
export default MemberList;