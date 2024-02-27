import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function MainLayout() {
  return (
    <Stack
      screenOptions={
        {
          /* header: ({ navigation, options, route, back }) => {
          return (
            <View>
              <Text>Header</Text>
              <Text>Header</Text>
              <Text>Header</Text>
              <Text>Header</Text>
              <Text>Header</Text>
              <Text>Header</Text>
            </View>
          );
        }, */
        }
      }
    />
  );
}
