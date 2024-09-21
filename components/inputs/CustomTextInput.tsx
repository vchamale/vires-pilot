import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface CustomTextInputProps {
  email: string;
  setEmail: Function;
  password: string;
  setPassword: Function;
  confirmPassword: string;
  setConfirmPassword: Function;
}

export const CustomTextInput = ({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}: CustomTextInputProps) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        placeholderTextColor="#BDBDBD"
        value={email}
        onChangeText={() => setEmail}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#BDBDBD"
        secureTextEntry
        value={password}
        onChangeText={() => setPassword}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirma tu contraseña"
        placeholderTextColor="#BDBDBD"
        secureTextEntry
        value={confirmPassword}
        onChangeText={() => setConfirmPassword}
        autoCorrect={false}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    gap: 15,
    width: "100%",
    marginVertical: 15,
  },
  input: {
    backgroundColor: "#F6F6F6",
    height: 50,
    paddingHorizontal: 7,
    borderWidth: 1,
    borderRadius: 9,
    color: "#BDBDBD",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
  },
});
