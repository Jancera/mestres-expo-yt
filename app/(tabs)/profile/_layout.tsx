import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true }} />
      <Stack.Screen name="edit" options={{ headerShown: true }} />
    </Stack>
  );
}
