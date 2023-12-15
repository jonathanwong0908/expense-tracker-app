import { View } from "../../components/Themed";
import { Card, Text, XStack, YStack } from "tamagui";

export default function TabOneScreen() {
  return (
    <XStack flex={1}>
      <YStack padding={10} width="100%" space="$3">
        <Card>
          <Card.Header>
            <Text color="$foreground">Header</Text>
          </Card.Header>
        </Card>
        <Card>
          <Card.Header>
            <Text color="$foreground">Header</Text>
          </Card.Header>
        </Card>
      </YStack>
    </XStack>
  );
}
