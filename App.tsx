import { View } from 'react-native';
import Providers from './src/providers';
import { Text } from './src/atoms';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Providers>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Providers>
  );
}
