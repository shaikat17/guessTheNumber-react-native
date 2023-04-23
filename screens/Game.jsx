import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/UI/Title";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
 
 

 const nextGuessHandler = (direction) => {
    if((direction === 'lower' && currentGuess < userNumber) || 
    (direction === 'greater' && currentGuess > userNumber)) {
        Alert.alert("Don't Lie", "You Know that this is wrong...", [{text: 'Sorry', style:'cancel'}])
        return;
    }
    if(direction === 'lower') {
        maxBoundary = currentGuess;
        } else {
        minBoundary = currentGuess + 1
    }
    const newRandNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRandNumber)
 }
  return (
    <View style={styles.screen}>
      <Title text="Opponent's Guess" />
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
    marginTop: 10
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
