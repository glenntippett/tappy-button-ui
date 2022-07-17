import { StyleSheet, View, Text } from "react-native";
import Button from "../../components/button";

const Game = (): JSX.Element => (
  <View style={styles.container}>
    <Button text="Press Me!" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});

export { Game };
