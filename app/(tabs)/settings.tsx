import { View, Text, StyleSheet } from "react-native";

export default function SettingsTab() {
  return (
    <View style={styles.container}>
      <Text>Hello from Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
