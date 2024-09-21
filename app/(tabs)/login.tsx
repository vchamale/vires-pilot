import {
  Keyboard,
  StatusBar,
  StyleSheet,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "@/components/Button";
import { Title } from "@/components/Title";
import { CustomTextInput } from "@/components/inputs/CustomTextInput";
import { Link } from "expo-router";

export const Login = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            keyboardVerticalOffset={60}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
          >
            <Title title={"Inicia Sesión"} />
            <CustomTextInput />
            <Button
              title={"Iniciar Sesión"}
              onClick={() => console.log("hola")}
            />
            <Link href="/login">About</Link>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

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
