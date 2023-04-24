import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';

import StartGame from './screens/StartGame';
import Game from './screens/Game'
import GameOver from './screens/GameOver'

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }
  
  const gameOverHandler = () => {
    setGameIsOver(true)
  }

  const reStartGame = () => {
    setUserNumber(null)
    // setGameIsOver(false)
    setGuessRounds(0)

  }

  let screen = <StartGame pickedNumberHandler={pickedNumberHandler}/>

  if(userNumber) {
    screen = <Game userNumber={userNumber} gameOverHandler={gameOverHandler}/>
  }

  if(gameIsOver && userNumber) {
    screen = <GameOver roundsNumber={userNumber} userNumber={guessRounds} reStartGame={reStartGame} />
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
