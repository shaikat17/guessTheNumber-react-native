import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/UI/Title';
import Colors from '../components/constants/Colors';

const GameOver = () => {
    return (
        <View style={styles.rootContainer}>
            <Title text='Game Over'></Title>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <View>
                <Text>Your phone needed X rounds to guess the number Y.</Text>
            </View>
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
    }
})