import React from 'react';
import {View, Text, StyleSheet, ProgressBarAndroid} from 'react-native';

const ProjectInfo = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Project Info</Text>
    <Text style={styles.description}>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi...
      <Text style={styles.seeMore}> See more</Text>
    </Text>
    <View style={styles.dateRow}>
      <Text style={styles.dateText}>Start date</Text>
      <Text style={styles.dateText}>End date</Text>
    </View>
    <View style={styles.dateRow}>
      <Text style={styles.dateValue}>01/09/23</Text>
      <Text style={styles.dateValue}>04/12/23</Text>
    </View>
    <View style={styles.progressRow}>
      <Text style={styles.statusText}>Status</Text>
      <View style={styles.progressBarWrapper}>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          color="#6BBE92"
          progress={0.78}
        />
        <Text style={styles.progressPercentage}>78%</Text>
      </View>
    </View>
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
  description: {color: '#6D6D6D'},
  seeMore: {color: '#007AFF'},
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  dateText: {color: '#9E9E9E'},
  dateValue: {fontWeight: 'bold'},
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  progressBarWrapper: {flexDirection: 'row', alignItems: 'center'},
  progressPercentage: {marginLeft: 8},
});

export default ProjectInfo;
