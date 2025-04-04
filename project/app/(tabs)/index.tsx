import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useFonts, NotoSansGujarati_400Regular } from '@expo-google-fonts/noto-sans-gujarati';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [fontsLoaded, fontError] = useFonts({
    'NotoSansGujarati': NotoSansGujarati_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800' }}
          style={styles.headerImage}
        />
        <Text style={styles.title}>Sign Language Learning</Text>
        <Text style={styles.gujaratiTitle}>સાંકેતિક ભાષા શીખવી</Text>
      </View>

      <View style={styles.featuresGrid}>
        <Link href="/alphabets" asChild>
          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureTitle}>Alphabets</Text>
            <Text style={styles.gujaratiText}>મૂળાક્ષરો</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/translator" asChild>
          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureTitle}>Translator</Text>
            <Text style={styles.gujaratiText}>અનુવાદક</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/mathematics" asChild>
          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureTitle}>Mathematics</Text>
            <Text style={styles.gujaratiText}>ગણિત</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/science" asChild>
          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureTitle}>Science</Text>
            <Text style={styles.gujaratiText}>વિજ્ઞાન</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
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
  },
  featuresGrid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  gujaratiText: {
    fontFamily: 'NotoSansGujarati',
    fontSize: 16,
    color: '#666',
  },
});