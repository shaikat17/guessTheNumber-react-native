import { StyleSheet, Text } from "react-native"

const Title = ({text}) => {
    return <Text style={styles.title}>{text}</Text>
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12

    }
})