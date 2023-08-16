import { View, Text } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

export default function OrderId() {
  const params = useLocalSearchParams();

  console.log(params);

  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Text>Informações de uma compra</Text>
      <Link href="/orders/cart">
        <Text>Navegar</Text>
      </Link>
    </View>
  );
}
