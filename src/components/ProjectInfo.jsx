import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, ProgressBarAndroid, ProgressViewIOS } from 'react-native';

const ProjectInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const description = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi...';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Project Info</Text>
      <Text style={styles.label}>Description</Text>

      <Text style={styles.description}>
        {isExpanded ? description : `${description.substring(0, 64)}...`}
        {!isExpanded && (
          <TouchableOpacity onPress={() => setIsExpanded(true)}>
            <Text style={styles.seeMore}> See more</Text>
          </TouchableOpacity>
        )}
      </Text>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Start date</Text>
          <Text style={styles.date}>01/09/23</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>End date</Text>
          <Text style={styles.date}>04/12/23</Text>
        </View>
        <View style={styles.statusColumn}>
          <Text style={styles.label}>Status</Text>
          <View style={styles.progressContainer}>
            {/* <View style={styles.progressBackground}> */}
              {Platform.OS === 'android' ? (
                <ProgressBarAndroid
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={0.78}
                  color="#008545"
                  style={styles.progressBar}
                />
              ) : (
                <ProgressViewIOS
                  progress={0.78}
                  progressTintColor="#008545"
                  style={styles.progressBar}
                />
              )}
            </View>
            <Text style={styles.percentage}>78%</Text>
          </View>
        </View>
      </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderWidth:1,
    borderColor:"#fff",
    margin: 16,
    marginBottom:-2,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 8,
    color:'#02111A',
  },
  label: {
    fontSize: 14,
    color: '#6A7175',
    marginBottom: 4,
    fontFamily: 'Poppins-Medium',
  },
  description: {
    fontSize: 14,
    color: '#4E585E',
    marginBottom: 8,
    lineHeight: 20, 
    fontFamily: 'Poppins-Medium',
  },
  seeMore: {
    color: '#f2994a', 
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  column: {
    flex: 1,
  },
  statusColumn: {
    flex: 1.5,
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'Poppins-Medium',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 15,  
    borderRadius: 10,  
  },
  percentage: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
});

export default ProjectInfo;