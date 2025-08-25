import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ title: "Esister Apps" }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}