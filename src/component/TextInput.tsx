import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../constant/colors';
import { fontFamilies } from '../constant/fontFamilies';
interface CustomInputProps {
  label?: string;
  placeholder: string;
  value: string;
  error?: string;
  touched?: boolean;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  isPassword?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  error,
  touched,
  onChangeText,
  onBlur,
  isPassword = false,
}) => {
  const [isSecure, setIsSecure] = useState(isPassword);

  const togglePasswordVisibility = () => setIsSecure((prev) => !prev);

  const hasError = touched && error;

  return (
    <View style={styles.container}>
     {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputContainer, hasError && styles.errorInput]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          placeholderTextColor={colors.textPrimary}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={isSecure}
        />
        {isPassword && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
            <MaterialIcons name={isSecure ? 'visibility' : 'visibility-off'} size={20} color={colors.textPrimary} />
          </TouchableOpacity>
        )}
      </View>
      {hasError && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,   
    color:colors.textPrimary,

  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: colors.textPrimary,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightBackground,
    borderRadius: 5,
    color:colors.textPrimary,
    paddingHorizontal: 10,
    backgroundColor:colors.lightBackground,
  },
  input: {
    width:'90%',
    fontSize: 16,
    color: colors.textPrimary,
    fontFamily:fontFamilies.medium,

  },
  icon: {
    marginLeft: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    marginTop: 5,
    fontSize: 12,
    color: 'red',
  },
});

export default CustomInput;
