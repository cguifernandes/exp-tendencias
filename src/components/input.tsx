import { Input as InputNativeBase, IInputProps } from 'native-base';

type InputProps = IInputProps & {
  placeholder: string;
  onChangeText?: (text: string) => void;
};

const Input = ({ placeholder, onChangeText }: InputProps) => {
  return (
    <InputNativeBase
      onChangeText={onChangeText}
      padding={'12px'}
      backgroundColor={'#fff'}
      marginTop={'40px'}
      marginX={'20px'}
      borderWidth={2}
      borderColor={'#0077B6'}
      borderRadius={6}
      maxLength={32}
      size={'md'}
      fontFamily={'Poppins_400Regular'}
      placeholder={placeholder}
    />
  );
};

export default Input;
