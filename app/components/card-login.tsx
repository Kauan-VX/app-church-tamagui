import { Image, View } from 'tamagui';

export interface ICardLogin {
  link: string;
}

export default function CardLogin({ link }: ICardLogin) {
  return (
    <View
      backgroundColor="white"
      shadowColor="black"
      borderRadius={12}
      padding={5}
      shadowOpacity={0.25}
      shadowRadius={3.84}>
      <Image
        style={{ width: 32, height: 32 }}
        source={{
          uri: link,
        }}
      />
    </View>
  );
}
