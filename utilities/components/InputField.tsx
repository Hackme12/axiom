import { View, Text, StyleSheet, TextInput, TextInputProps } from 'react-native';
import React from 'react';

type InputFieldProps = {
  placeHolder?: string;
  value?: string;
  keyBoardType?: string;
  handleChangeText?: (text: string) => void;
} & TextInputProps;

export const InputField: React.FC<InputFieldProps> = ({
  placeHolder,
  value,
  keyBoardType,
  handleChangeText,
  ...props
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        placeholderTextColor="#9BA3AF"
        value={value}
        onChangeText={handleChangeText}
        autoCapitalize="none"
        {...props}
      />
    </View>
  );
};

export const EmailField = ({ value, handleChangeText }: InputFieldProps) => {
  return (
    <InputField
      placeHolder="email"
      value={value}
      keyBoardType="email-address"
      handleChangeText={handleChangeText}></InputField>
  );
};

export const PasswordField = ({ value, handleChangeText }: InputFieldProps) => {
  return (
    <InputField
      placeHolder="password"
      value={value}
      keyBoardType="default"
      handleChangeText={handleChangeText}
      secureTextEntry></InputField>
  );
};

export const ConfirmPasswordField = ({ value, handleChangeText }: InputFieldProps) => {
  return (
    <InputField
      placeHolder="confirm password"
      value={value}
      keyBoardType="default"
      handleChangeText={handleChangeText}
      secureTextEntry></InputField>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 12,
    padding: 16,
    color: '#FFFFFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
});
