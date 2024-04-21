import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContext } from '@react-navigation/native';

const CustomNavigationBar = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('DetailsScreen')}>
        <Text>Go to Details Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5fcff',
  },
});

export default CustomNavigationBar;