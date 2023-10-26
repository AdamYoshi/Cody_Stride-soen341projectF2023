import { Center, Loader, Text } from "@mantine/core";

export default function Loading() {
  return (
    <Center style={{ height: "100vh" }}>
      <Loader size="lg" color="blue" />
      <Text size="lg" mt="sm">
        Loading...
      </Text>
    </Center>
  );
}