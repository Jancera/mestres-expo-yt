import { View, Text, Button, StyleSheet } from "react-native";
import { Slot, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainLayout() {
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <Text>Conteúdo estático do layout principal</Text>
  //     <Slot />
  //   </SafeAreaView>
  // );
  return <Stack />;
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "green",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
