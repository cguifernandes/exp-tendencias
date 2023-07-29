import { StyleProp, TextInput, TextStyle } from 'react-native';

interface InputProps {
  placeholder: string;
}

const Input = ({ placeholder }: InputProps) => {
  return (
    <TextInput
      style={{
        padding: 12,
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 8,
        marginTop: 40,
      }}
      maxLength={32}
      placeholder={placeholder}
    />
  );
};

export default Input;
