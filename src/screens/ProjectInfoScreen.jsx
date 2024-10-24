import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import TaskDetails from '../components/TaskItem';
import MemberList from '../components/Members';
import AssetList from '../components/Assets';
import Header from '../components/Header';
import ProjectInfoCard from '../components/ProjectInfo';
import TitleCount from '../components/CardHeader';
import RightArrow from '../assets/icons/RightArrow';

const ProjectInfoScreen = () => {
 
  const assets = [
    {
      id: '1',
      image:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnWO0MEXw9N9NiBofPZ_Pg-IdPV7_-o_MxQ1AH6P573YyrqW9q',
      name: 'JCB',
    },
    {
      id: '2',
      image:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ6X6-3BvIYOqvWdUGLBVHMI-sd1PeBUtuwz2KsaB0tbm8cOHgH',
      name: 'Asset Name',
    },
    {
      id: '3',
      image:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZaTgVcCyqKcfCGL4iJKD5QBadf7u0NhWw52xZ_qRoGjPp49dL',
      name: 'Laptop Dell',
    },
    {
      id: '4',
      image:
        'https://m.media-amazon.com/images/I/61pc0xVMJBL._SX522_.jpg',
      name: 'Laptop HP',
    },
    {
      id: '5',
      image:
        'https://m.media-amazon.com/images/I/71HwYi43pUL._SX522_.jpg',
      name: 'Toy Gun',
    },
    {
      id: '6',
      image:
        'https://images-eu.ssl-images-amazon.com/images/I/81T3olLXpUL._AC_UL600_SR600,400_.jpg',
      name: '',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Header title="Metanus UI Design" />
      <ProjectInfoCard />
      <TaskDetails />
      <MemberList members={MemberList} />
      <AssetList assets={assets} />
      <TitleCount
        title="Documents"
        badgeCount={26}
        RightArrowIcon={RightArrow}
      />
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