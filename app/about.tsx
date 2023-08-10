import { View, Text } from "react-native";
import { useRouter } from "expo-router";

export default function About() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/orders/cart");
  }, 1000);

  return (
    <View
      style={{ height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <Text>Sobre</Text>
    </View>
  );
}
