import { View, Text, Button, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  const handlePress = () => {
    // router.push("/orders/list/id");
    router.push({
      pathname: "/orders/list/mestres",
      params: {
        _id: "123",
      },
    });
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Home screen",
        }}
      />
      <Text style={styles.title}>Layouts</Text>
      <Button title="Navegar" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
