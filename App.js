import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import StartGame from './screens/StartGame';

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <StartGame/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
     flex: 1
  }
});
