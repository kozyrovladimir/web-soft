import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import Main from "../screens/Main";
import Categories from "../screens/Categories";

const AppStack = createNativeStackNavigator();

function Navigation() {
    return (
        <AppStack.Navigator
            initialRouteName="sign_in"
            screenOptions={() => ({
                headerShown: false,
            })}>
            <AppStack.Screen name="sign_in" component={SignIn} />
            <AppStack.Screen name="main" component={Main} />
            <AppStack.Screen name="categories" component={Categories} />
        </AppStack.Navigator>
    );
}

export default Navigation;
