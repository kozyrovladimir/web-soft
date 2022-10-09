import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from '../screens/Categories';
import Main from '../screens/Main';
import SignIn from '../screens/SignIn';

const AppStack = createNativeStackNavigator();

const Navigation = (): JSX.Element => {
  return (
    <AppStack.Navigator
      initialRouteName="sign_in"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <AppStack.Screen name="sign_in" component={SignIn} />
      <AppStack.Screen name="main" component={Main} />
      <AppStack.Screen name="categories" component={Categories} />
    </AppStack.Navigator>
  );
};

export default Navigation;
