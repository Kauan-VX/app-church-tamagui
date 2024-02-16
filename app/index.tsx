import { zodResolver } from '@hookform/resolvers/zod';
import { Link, Stack } from 'expo-router';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Form, Input, Text, View, XStack, YStack } from 'tamagui';
import { z } from 'zod';

import { Button, ButtonText, Container, Main, Subtitle, Title } from '../tamagui.config';
import CardLogin from './components/card-login';

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email obrigatório' })
    .email({ message: 'Deve ser um endereço de email válido' }),
  password: z.string().min(6, { message: 'Senha obrigatória' }),
});

type IForm = z.infer<typeof schema>;
export default function Page() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data);

  const IconLogin = [
    {
      link: 'https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png',
    },
    {
      link: 'https://cdn-icons-png.flaticon.com/512/0/747.png',
    },
    {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png',
    },
  ];

  return (
    <Container padding="0">
      <Main backgroundColor="black">
        <Stack.Screen options={{ title: 'Teste' }} />
        <YStack
          padding={24}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          flex={1}>
          <Title color="white">Bem-Vindo</Title>
          <Subtitle textAlign="center" color="white">
            Este App foi feito para facilitar sua rotina
          </Subtitle>
        </YStack>
        <YStack
          marginTop={10}
          padding={24}
          flex={2}
          flexWrap="wrap"
          borderRadius={36}
          backgroundColor="white">
          <View padding="$-14" height="100%" width="100%">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <YStack gap={8}>
                <Text paddingLeft={10} fontWeight="bold" fontSize="$6">
                  E-mail
                </Text>

                <Controller
                  control={control}
                  name="email"
                  render={({ field: { value, onChange } }) => (
                    <Input
                      color="black"
                      borderColor="$colorTransparent"
                      marginTop="20px"
                      placeholder="Insira o email"
                      marginBottom="16px"
                      width="100%"
                      backgroundColor="#f1f5f9"
                      size="$4"
                      value={value}
                      onChangeText={onChange}
                      autoCapitalize="none"
                    />
                  )}
                />

                {errors.email && (
                  <Text paddingLeft={10} color="red" fontWeight="400">
                    {errors.email?.message}
                  </Text>
                )}
                <Text paddingLeft={10} fontWeight="bold" fontSize="$6">
                  Senha
                </Text>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { value, onChange } }) => (
                    <Input
                      color="black"
                      borderColor="$colorTransparent"
                      marginTop="20px"
                      placeholder="Insira o email"
                      marginBottom="16px"
                      width="100%"
                      backgroundColor="#f1f5f9"
                      size="$4"
                      value={value}
                      onChangeText={onChange}
                      secureTextEntry
                    />
                  )}
                />
                {errors.password && (
                  <Text paddingLeft={10} color="red" fontWeight="400">
                    {' '}
                    {errors.password?.message}
                  </Text>
                )}
              </YStack>

              <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
                <Button marginLeft="auto" backgroundColor="$colorTransparent">
                  <ButtonText
                    textDecorationLine="underline"
                    color="black"
                    fontWeight="700"
                    fontSize="$3">
                    Recuperar senha
                  </ButtonText>
                </Button>
              </Link>

              <Button onPress={handleSubmit(onSubmit)} backgroundColor="black">
                <ButtonText fontWeight="700" fontSize="$8">
                  Login
                </ButtonText>
              </Button>
            </Form>
            <Text
              textAlign="center"
              marginBottom={24}
              marginTop={24}
              fontWeight="700"
              fontSize="$6">
              Ou
            </Text>
            <XStack display="flex" width="100%" justifyContent="center" gap="$-13">
              {IconLogin.map((skill, index) => (
                <CardLogin key={index} link={skill.link} />
              ))}
            </XStack>
          </View>
        </YStack>
      </Main>
    </Container>
  );
}
