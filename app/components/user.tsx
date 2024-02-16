import { Avatar, XStack } from 'tamagui';

export function User() {
  return (
    <XStack>
      <Avatar borderRadius={24}>
        <Avatar.Image src="https://github.com/Kauan-VX.png" />
        <Avatar.Fallback backgroundColor="$gray5" />
      </Avatar>
    </XStack>
  );
}
