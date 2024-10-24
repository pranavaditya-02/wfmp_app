import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import TaskDetails from '../components/TaskItem';
import MemberList from '../components/Members';
import AssetList from '../components/Assets';
import Header from '../components/Header';
import ProjectInfoCard from '../components/ProjectInfo';
import TitleCount from '../components/CardHeader';
import RightArrow from '../assets/icons/RightArrow';

const ProjectInfoScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const navigateToDocuments = () => {
    navigation.navigate('DocumentsScreen'); // Navigate to DocumentsScreen
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="Metanus UI Design" />
      <ProjectInfoCard />
      <TaskDetails />
      <MemberList members={[]} /* Replace with your members data */ />
      <AssetList assets={[]} /* Replace with your assets data */ />

      {/* Wrap TitleCount with TouchableOpacity for navigation */}
      <TouchableOpacity onPress={navigateToDocuments}>
        <TitleCount
          title="Documents"
          badgeCount={26}
          RightArrowIcon={RightArrow}
        />
      </TouchableOpacity>
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
});

export default ProjectInfoScreen;
