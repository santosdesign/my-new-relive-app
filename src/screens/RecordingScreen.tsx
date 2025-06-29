import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RecordingScreen: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);

  const handleRecordingToggle = () => {
    // Logic to start/stop recording
    setIsRecording(!isRecording);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isRecording ? 'Recording...' : 'Ready to Record'}</Text>
      <Button title={isRecording ? 'Stop Recording' : 'Start Recording'} onPress={handleRecordingToggle} />
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

export default RecordingScreen;
