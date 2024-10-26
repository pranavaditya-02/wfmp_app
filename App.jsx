import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectInfoScreen from '../wfmp_app/src/screens/ProjectInfoScreen'; 
import DocumentsScreen from './src/screens/DocumentsScreen';
import WireframesScreen from './src/screens/WireFramesScreen';
import { Provider } from 'react-redux';
import store from './redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F3F6" /> 
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="ProjectInfo" component={ProjectInfoScreen} options={{ headerShown: false }} />
          <Stack.Screen name="WireFramesScreen" component={WireframesScreen} options={{ headerShown: false }} />
          <Stack.Screen name="DocumentsScreen" component={DocumentsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
