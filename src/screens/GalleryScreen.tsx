import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GalleryScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery</Text>
      <Button title="Upload Photos" onPress={() => { /* Logic to upload photos */ }} />
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

export default GalleryScreen;
