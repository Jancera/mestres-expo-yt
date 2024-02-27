import { View, Text } from "react-native";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

export default function OrderId() {
  const params = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);

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
