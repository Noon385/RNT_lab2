import React from 'react';
import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import { PaperProvider } from '@react-navigation/stack';
import CustomNavigationBar from './CustomNavigationBar';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ header: () => <CustomNavigationBar /> }} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ headerTitle: 'Details Screen', headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}><Text>Back</Text></TouchableOpacity> }} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;