import { Link } from "expo-router";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function HomeTab() {
  return (
    <View style={styles.container}>
      <Text>Hello from Home</Text>
      <TextInput placeholder="Input" style={styles.input} />
      <Link href={"profile"}>Perfil</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#999999",
    width: 300,
    padding: 5,
    borderRadius: 10,
    marginTop: 20,
  },
});
