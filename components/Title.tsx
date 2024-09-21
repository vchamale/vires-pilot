import { Text, StyleSheet } from "react-native";

interface TitleProps {
  title: string;
}
export const Title = ({ title }: TitleProps) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: "#black",
    textAlign: "center",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "600",
    marginBottom: 12,
  },
});
