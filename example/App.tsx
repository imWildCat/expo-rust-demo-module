import * as ExpoRustDemoModule from "expo-rust-demo-module";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{ExpoRustDemoModule.hello()}</Text>

      <Text>
        1 + 2 = {ExpoRustDemoModule.addInRust(1, 2)} (calculated in Rust)
      </Text>

      {/* simple addition calculator UI */}

      <View style={styles.calculatorContainer}>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Enter first number"
          onChangeText={(text) => setFirstNumber(parseInt(text, 10) || 0)}
        />
        <Text style={styles.operator}>+</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Enter second number"
          onChangeText={(text) => setSecondNumber(parseInt(text, 10) || 0)}
        />
        <Text style={styles.equals}>=</Text>
        <Text style={styles.result}>
          {ExpoRustDemoModule.addInRust(firstNumber, secondNumber)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  calculatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 50,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  operator: {
    marginHorizontal: 10,
  },
  equals: {
    marginHorizontal: 10,
  },
  result: {},
});
