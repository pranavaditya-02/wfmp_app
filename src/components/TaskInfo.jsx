import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.infoText}>Task Info • 05/09/23</Text>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>Yet to start</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi...{' '}
        <Text style={styles.moreText}>See more</Text>
      </Text>
      <View style={styles.detailsRow}>
        <Text style={styles.detail}>ID 0213</Text>
        <Text style={styles.detail}>Type: General</Text>
        <Text style={styles.detail}>Priority: Medium</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    margin: 16,
    marginBottom:-2,

 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#000',
    fontFamily:'Poppins-SemiBold',
  },
  statusButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusText: {
    fontSize: 12,
    color: '#004080',
  },
  description: {
    marginVertical: 10,
    fontFamily:'Poppins-Medium',
    color: '#333',
  },
  moreText: {
    color: '#FF9000',
    fontFamily:'Poppins-Medium',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    color: '#555',
    fontFamily:'Poppins-Medium',
  },
});

export default TaskInfo;
