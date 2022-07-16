import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps): JSX.Element => {
  const [count, setCount] = useState(0);

  const handlePress = (): void => {
    setCount(count + 1);
  };

  return (
    <>
      <Text>Pressed {count} times</Text>
      <TouchableOpacity onPress={() => handlePress()} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

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
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export { Button };
