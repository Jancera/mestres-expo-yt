import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View
      style={{ height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <Text>Olá mestres!!!</Text>
      <Text>Olá mestres!!!</Text>
      <Text>Olá mestres!!!</Text>
      <Text>Olá mestres!!!</Text>
      <Link href="/about" asChild>
        <Pressable>
          <Text>Sobre</Text>
        </Pressable>
      </Link>
    </View>
  );
}
