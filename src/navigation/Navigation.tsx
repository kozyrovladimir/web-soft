import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenContainer from '../components/ScreenContainer';
import { ScreenNames } from '../enums';
import Categories from '../screens/Categories';
import Main from '../screens/Main';
import SignIn from '../screens/SignIn';

const AppStack = createNativeStackNavigator();

const Navigation = (): JSX.Element => {
  return (
    <ScreenContainer>
      <AppStack.Navigator
        initialRouteName={ScreenNames.SignIn}
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <AppStack.Screen name={ScreenNames.SignIn} component={SignIn} />
        <AppStack.Screen name={ScreenNames.Main} component={Main} />
        <AppStack.Screen name={ScreenNames.Categories} component={Categories} />
      </AppStack.Navigator>
    </ScreenContainer>
  );
};

export default Navigation;
