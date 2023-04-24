import { useState } from "react";
import { StyleSheet, View, TextInput, Alert, Text } from "react-native";
import Colors from "../components/constants/Colors";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from '../components/UI/Title';
import Card from "../components/UI/Card";


const StartGame = ({ pickedNumberHandler }) => {
  const [enterNumber, setEnterNumber] = useState("");

  const numberInputHandler = (inputText) => {
    setEnterNumber(inputText);
  };

  const resetInputHandler = () => {
    setEnterNumber("");
  };

  const ConfirmInputHandler = () => {
    const chosenNumber = parseInt(enterNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "You have to enter a number between 1 to 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    pickedNumberHandler(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title text="Guess My Number" ></Title>
      <Card>
      <Text style={styles.textIns}>Enter a Number</Text>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enterNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={ConfirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </Card>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  textIns: {
    color: Colors.accent500,
    fontSize: 24
  },
  numberInput: {
    height: 50,
    width: 50,
    borderBottomColor: Colors.accent500,
    fontSize: 32,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
