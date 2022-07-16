import { StyleSheet, View, Text } from "react-native";

const Home = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Home</Text>
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

export { Home };
