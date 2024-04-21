import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button, View } from "react-native-web";

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <TouchableOpacity
                style={styles.Button}
                onPress={() => navigation.navigate('Details')}
            >
                <Text>
                    Go to Details
                </Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    Button: {
        padding: 10,
        margin: 5,
        backgroundColor: "aqua",
        borderRadius: 5,
    }
})

export default HomeScreen;