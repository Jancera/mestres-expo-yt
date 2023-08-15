import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function OrderId() {
  const params = useLocalSearchParams();

  console.log(params);

  return (
    <View
      style={{ height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <Text>Informações de uma compra</Text>
    </View>
  );
}
