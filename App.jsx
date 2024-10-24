import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectInfoScreen from '../wfmp_app/src/screens/ProjectInfoScreen'; 
import DocumentsScreen from './src/screens/DocumentsScreen';
import WireframesScreen from './src/screens/WireFramesScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F3F6" /> 
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="ProjectInfo" component={ProjectInfoScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
