import { StyleSheet, Text, View } from "react-native";

const LeaderboardScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Catalog</Text>
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

export { LeaderboardScreen };
