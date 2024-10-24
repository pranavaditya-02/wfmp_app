import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ProjectInfo from '../components/ProjectInfo';
import TaskSection from '../components/TaskItem';
import Members from '../components/Members';
import Assets from '../components/Assets';
import Documents from '../components/Documents';

const ProjectInfoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="Metanas UI Design" /> 
      <ProjectInfo />
      <TaskSection />
      <Members />
      <Assets />
      <Documents />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F4F5F9',
  },
 
});

export default ProjectInfoScreen;
