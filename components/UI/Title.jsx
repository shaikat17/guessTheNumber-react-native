import { StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

const Title = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
