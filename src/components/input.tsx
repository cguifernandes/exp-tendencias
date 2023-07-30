import { NativeSyntheticEvent, TextInput, TextInputChangeEventData } from 'react-native';

interface InputProps {
  placeholder: string;
  onChangeText?: (text: string) => void;
}

const Input = ({ placeholder, onChangeText }: InputProps) => {
  return (
    <TextInput
      onChangeText={onChangeText}
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
