import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import CustomNavigationBar from "../components/CustomNavigationBar";

const Stack = createNativeStackNavigator();
const Router = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                header: (props) => <CustomNavigationBar {...props} />,
                
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

export default Router;