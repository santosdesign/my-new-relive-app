import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SubscriptionScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscription Options</Text>
      <Button title="Choose Plan" onPress={() => { /* Logic to select subscription plan */ }} />
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

export default SubscriptionScreen;
