import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import TaskInfo from '../components/TaskInfo';
import Checklist from '../components/Checklist';
import LogExpense from '../components/LogExpense';
import Users from '../components/Users';
import CommentSection from '../components/Comment';


const WireframesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="Wireframes" /> 
      <TaskInfo />
      <Checklist />
      <LogExpense />
      <Users />
      <CommentSection/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    
  },
});

export default WireframesScreen;
