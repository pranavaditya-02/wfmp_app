import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Members = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Members</Text>
    <View style={styles.membersRow}>
      <Image source={{ uri: 'https://example.com/member1.png' }} style={styles.memberImage} />
      <Image source={{ uri: 'https://example.com/member2.png' }} style={styles.memberImage} />
      <Image source={{ uri: 'https://example.com/member3.png' }} style={styles.memberImage} />
      <Text style={styles.moreMembers}>+3</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  section: { backgroundColor: '#fff', padding: 16, borderRadius: 8, marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  membersRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  memberImage: { width: 40, height: 40, borderRadius: 20, marginRight: 8 },
  moreMembers: { marginLeft: 8 },
});

export default Members;
