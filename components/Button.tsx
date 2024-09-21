import { StyleSheet, Pressable, Text, Alert } from "react-native";

interface ButtonProps {
  title: string;
  onClick: Function;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onClick()}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5DB075",
    borderRadius: 100,
    height: 50,
    justifyContent: "center",
    marginTop: 7,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
  },
});
