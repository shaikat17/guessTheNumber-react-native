import { View } from "react-native"
import { TextInput } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

const StartGame = () => {
    return (
        <View>
            <TextInput />
            <PrimaryButton>Reser</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartGame