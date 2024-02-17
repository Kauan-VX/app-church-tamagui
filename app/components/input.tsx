import { Controller, FieldValues, RegisterOptions } from 'react-hook-form';
import { Input, Text, YStack } from 'tamagui';
import { z } from 'zod';

interface IInputProps {
  control: any;
  name: string;
  rules: Omit<
    RegisterOptions<FieldValues, string>,
    'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;
  placeholder: string;
  label: string;
  schema: z.ZodObject<any>;
}

export function FormInput({
  control,
  name,
  rules,
  label,
  placeholder,
  ...useInputProps
}: IInputProps) {
  return (
    <YStack>
      <Text paddingLeft={10} fontWeight="bold" fontSize="$6">
          {label}
      </Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <Input
            {...useInputProps}
            color="black"
            borderColor="$colorTransparent"
            marginTop="20px"
            placeholder={placeholder}
            marginBottom="16px"
            width="100%"
            backgroundColor="#f1f5f9"
            size="$4"
            value={field.value}
            onChangeText={field.onChange}
            autoCapitalize="none"
          />
        )}
      />
    </YStack>
  );
}
