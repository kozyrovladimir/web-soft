import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from "./src/navigation/Navigation";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <StatusBar
                    animated={true}
                    backgroundColor={'#fff'}
                />
                <Navigation/>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
