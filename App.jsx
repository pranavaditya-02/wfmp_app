import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectInfoScreen from '../wfmp_app/src/screens/ProjectInfoScreen'; 
import DocumentsScreen from './src/screens/DocumentsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F3F6" /> 
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="ProjectInfo" component={DocumentsScreen} options={{ headerShown: false }} />
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
