import { View, Text, StyleSheet } from "react-native";

export default function ProfileTab() {
  return (
    <View style={styles.container}>
      <Text>Hello from Profile</Text>
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
