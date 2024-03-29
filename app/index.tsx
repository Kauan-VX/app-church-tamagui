import axios from 'axios';
import { Link, router } from 'expo-router';
import md5 from 'md5';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { Input, Text, View, XStack, YStack } from 'tamagui';

import { Button, ButtonText, Container, Main, Subtitle, Title } from '../tamagui.config';
import CardLogin from './components/card-login';
import { IToken } from './models/user';

type LoginForm = {
  username: string;
  password: string;
};

export default function Page() {
  const { control, handleSubmit, formState } = useForm<LoginForm>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleLogin: SubmitHandler<LoginForm> = async (data) => {
    try {
      const { username, password } = data;
      const passwordMD5 = md5(password).toString().toUpperCase();
      const response = await axios.post<IToken>('https://api.petsimples.com/core/auth-company/', {
        username,
        password: passwordMD5,
      });
      if (response.status === 200) {
        console.log('Login bem-sucedido:', response.data);
        router.navigate('/news');
      } else {
        Alert.alert('Erro', 'Não foi possível fazer login. Verifique suas credenciais.');
      }
    } catch (error) {
      Alert.alert('Erro');
      console.log(error);
    }
  };

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
        <YStack
          padding={24}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          flex={1}
        >
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
          backgroundColor="white"
        >
          <View padding="$-14" height="100%" width="100%">
            <YStack gap={8}>
              <Controller
                control={control}
                name="username"
                render={({ field: { value, onChange } }) => (
                  <Input
                    color="black"
                    borderColor="$colorTransparent"
                    marginTop="20px"
                    placeholder="Insira o e-mail"
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
                    placeholder="Insira a senha"
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
            </YStack>

            <Link href={{ pathname: '/(tabs)/news', params: { name: 'Dan' } }} asChild>
              <Button marginLeft="auto" backgroundColor="$colorTransparent">
                <ButtonText
                  textDecorationLine="underline"
                  color="black"
                  fontWeight="700"
                  fontSize="$3"
                >
                  Recuperar senha
                </ButtonText>
              </Button>
            </Link>

            <Button onPress={handleSubmit(handleLogin)} backgroundColor="black">
              <ButtonText fontWeight="700" fontSize="$8">
                Login
              </ButtonText>
            </Button>
            <Text
              textAlign="center"
              marginBottom={24}
              marginTop={24}
              fontWeight="700"
              fontSize="$6"
            >
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
