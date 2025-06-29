import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

// Define the props for the HomeScreen using the navigation stack
interface Props extends NativeStackScreenProps<RootStackParamList, 'Home'> {}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Relive: Hike & Ride Memories</Text>
      <Button title="Start Recording" onPress={() => navigation.navigate('Recording')} />
      <Button title="View Gallery" onPress={() => navigation.navigate('Gallery')} />
      <Button title="Subscription Options" onPress={() => navigation.navigate('Subscription')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
