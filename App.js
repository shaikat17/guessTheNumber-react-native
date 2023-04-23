import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartGame from './screens/StartGame';
import Game from './screens/Game'
import { useState } from 'react';

export default function App() {
  const [userNumber, setUserNumber] = useState()

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGame pickedNumberHandler={pickedNumberHandler}/>

  if(userNumber) {
    screen = <Game/>
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage} >
        <SafeAreaView style={styles.rootScreen}>
        { screen }
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
     flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
