import { Tabs } from 'expo-router';
import { Book, Chrome as Home, Languages, Calculator, Brain } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="alphabets"
        options={{
          title: 'Alphabets',
          tabBarIcon: ({ color, size }) => <Book size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="translator"
        options={{
          title: 'Translator',
          tabBarIcon: ({ color, size }) => <Languages size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="mathematics"
        options={{
          title: 'Math',
          tabBarIcon: ({ color, size }) => <Calculator size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="science"
        options={{
          title: 'Science',
          tabBarIcon: ({ color, size }) => <Brain size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}