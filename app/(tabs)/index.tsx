import { Link } from "expo-router";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { EInterFonts } from "../../src/shared/inter-fonts.enum";

export default function HomeTab() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: EInterFonts.THIN, fontSize: 40 }}>
        Hello from Home
      </Text>
      <Link href={"profile"}>Perfil</Link>
      <Link href={"edit"}>Edit</Link>
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
