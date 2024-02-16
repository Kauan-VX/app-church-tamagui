// import { Controller } from 'react-hook-form';
// import { Input, Text, YStack } from 'tamagui';
// import { z } from 'zod';

// interface IInputProps {
//   control: any;
//   form_name: string;
//   placeholder: string;
//   label: string;
//   schema: z.ZodObject<any>;
// }

// export const FormInput: React.FC<IInputProps> = ({
//   control,
//   form_name,
//   placeholder,
//   label,
//   schema,
// }) => {
//   return (
//     <YStack>
//       <Text paddingLeft={10} fontWeight="bold" fontSize="$6">
//         {label}
//       </Text>
//       <Controller
//         control={control}
//         name={form_name}
//         render={({ field: { value, onChange } }) => (
//           <Input
//             color="black"
//             borderColor="$colorTransparent"
//             marginTop="20px"
//             placeholder={placeholder}
//             marginBottom="16px"
//             width="100%"
//             backgroundColor="#f1f5f9"
//             size="$4"
//             value={value}
//             onChangeText={onChange}
//             autoCapitalize="none"
//           />
//         )}
//       />

//       {schema && schema._def && schema._def.props[name] && (
//         <Text paddingLeft={10} color="red" fontWeight="400">
//           {schema._def.props[name].message}
//         </Text>
//       )}
//     </YStack>
//   );
// };
