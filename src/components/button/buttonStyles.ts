import { StyleSheet } from "react-native";

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
  button: {
    backgroundColor: "#e91e63",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default styles;
