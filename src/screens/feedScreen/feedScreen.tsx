import { StyleSheet, Text, View } from "react-native";
import Button from "./../../components/button/";

const FeedScreen = () => (
  <View style={styles.layout}>
    <Button text="Press Me!" />
  </View>
);

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});

export { FeedScreen };
