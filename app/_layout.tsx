import { Stack } from "expo-router";
import Header from "../src/components/header";

export default function MainLayout() {
  return (
    <Stack
      screenOptions={{
        header: Header,
      }}
    />
  );
}
