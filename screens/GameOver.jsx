import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/UI/Title';
import Colors from '../components/constants/Colors';
import PrimaryButton from '../components/UI/PrimaryButton';

const GameOver = ({ roundsNumber, userNumber, reStartGame }) => {
    return (
        <View style={styles.rootContainer}>
            <Title text='Game Over'></Title>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
                <Text style={styles.summaryText}>Your phone needed <Text style={styles.highLight}>{userNumber}</Text> rounds to guess the number <Text style={styles.highLight}>{roundsNumber}</Text>.</Text>

                <PrimaryButton onPress={reStartGame}>Start New Game</PrimaryButton>
        </View>
    );
};

export default GameOver;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highLight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})