import { StyleSheet, View, TextInput, Alert } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import { useState } from "react"

const StartGame = () => {
    const [enterNumber, setEnterNumber] = useState('')

    const numberInputHandler = (inputText) => {
        setEnterNumber(inputText)
    }
     
    const reseInputHandler = () => {
        setEnterNumber('')
    }

    const ConfirmInputHandler = () => {
        const chosenNumber = parseInt(enterNumber)

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'You have to enter a number between 1 to 99.', [{text: 'Okay', style: "destructive", onPress: reseInputHandler}])
            return;
        }
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" value={enterNumber} onChangeText={numberInputHandler} />
            <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={reseInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={ConfirmInputHandler}>Confirm</PrimaryButton></View>
            </View>
        </View>
    )
}

export default StartGame

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        borderBottomColor: '#ddb52f',
        fontSize: 32,
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: 'center'
    },
    buttonsContainer: {
flexDirection: "row",
    },
    buttonContainer: {
        flex: 1
    }
})