import {
  Keyboard,
  StatusBar,
  StyleSheet,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Button } from "@/components/Button";
import { Title } from "@/components/Title";
import { CustomTextInput } from "@/components/inputs/CustomTextInput";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function HomeScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const customTextProps = {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  };

  const handleSubmit = () => {
    if ([email, password, confirmPassword].includes("")) {
      Alert.alert("Alerta", "Por favor llene todos los campos");
      return;
    }
    // router.push("/(tabs)/Login");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            keyboardVerticalOffset={60}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
          >
            <Title title={"Regístrate"} />
            <CustomTextInput {...customTextProps} />
            <Button title={"Registrarse"} onClick={() => handleSubmit} />
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingRight: 25,
    paddingBottom: 25,
    paddingLeft: 25,
  },
});
