import { StyleSheet, Text, View } from 'react-native';

import * as ExpoRustDemoModule from 'expo-rust-demo-module';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoRustDemoModule.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
