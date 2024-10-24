import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TaskItem = ({title, id, date, status, statusColor}) => (
  <View style={styles.taskItem}>
    <View>
      <Text style={styles.taskTitle}>{title}</Text>
      <Text style={styles.taskInfo}>
        {id} • {date}
      </Text>
    </View>
    <View style={[styles.taskStatus, {backgroundColor: statusColor}]}>
      <Text style={styles.taskStatusText}>{status}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  taskTitle: {fontWeight: 'bold'},
  taskInfo: {color: '#9E9E9E'},
  taskStatus: {paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12},
  taskStatusText: {color: '#fff'},
});

export default TaskItem;
