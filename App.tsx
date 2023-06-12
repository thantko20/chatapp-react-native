import { View } from 'react-native';
import Providers from './src/providers';
import { Text } from './src/atoms';

export default function App() {
  return (
    <Providers>
      <View>
        <Text>Hello World</Text>
      </View>
    </Providers>
  );
}
