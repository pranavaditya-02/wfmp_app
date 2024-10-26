import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation
import TaskDetails from '../components/TaskItem';
import MemberList from '../components/Members';
import AssetList from '../components/Assets';
import Documents from '../components/Documents';
import Header from '../components/Header';
import ProjectInfoCard from '../components/ProjectInfo';


const ProjectInfoScreen = () => {
  // Initialize navigation

  

  return (
    <ScrollView style={styles.container}>
      <Header title="Metanus UI Design" />
      <ProjectInfoCard />
      <TaskDetails />
      <MemberList members={[]} /* Replace with your members data */ />
      <AssetList assets={[]} /* Replace with your assets data */ />

      {/* TouchableOpacity with specific height */}
     <Documents/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  rightArrow: {
    width: 20,
    height: 20,
  },
  touchableContainer: {
    // height: 60, // Set your desired height here
    // justifyContent: 'center', // Center content vertically
    // paddingHorizontal: 16,
    // paddingVertical:20 // Optional: Add horizontal padding
  },
});

export default ProjectInfoScreen;
