import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, NotoSansGujarati_400Regular } from '@expo-google-fonts/noto-sans-gujarati';
import * as Speech from 'expo-speech';

export default function TranslatorScreen() {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');

  const [fontsLoaded] = useFonts({
    'NotoSansGujarati': NotoSansGujarati_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const translateText = () => {
    // In a real app, this would call a translation API
    // For demo purposes, we'll just show a simple translation
    setTranslation('નમસ્તે! આ એક ડેમો અનુવાદ છે.');
  };

  const speakText = () => {
    Speech.speak(text, {
      language: 'gu-IN',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Translator</Text>
      <Text style={styles.gujaratiTitle}>અનુવાદક</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter text to translate..."
        value={text}
        onChangeText={setText}
        multiline
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={translateText}>
          <Text style={styles.buttonText}>Translate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={speakText}>
          <Text style={styles.buttonText}>Speak</Text>
        </TouchableOpacity>
      </View>

      {translation ? (
        <View style={styles.translationContainer}>
          <Text style={styles.translationTitle}>Translation:</Text>
          <Text style={styles.translationText}>{translation}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  gujaratiTitle: {
    fontFamily: 'NotoSansGujarati',
    fontSize: 20,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  translationContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  translationTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  translationText: {
    fontFamily: 'NotoSansGujarati',
    fontSize: 18,
    lineHeight: 24,
  },
});