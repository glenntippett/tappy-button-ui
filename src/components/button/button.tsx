import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";

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
      <TouchableOpacity
        onPress={() => handlePress()}
        style={{ backgroundColor: "beige" }}
      >
        <Text style={{ fontSize: 20 }}>{text}</Text>
      </TouchableOpacity>
      <Text>Pressed {count} times</Text>
    </>
  );
};

export { Button };
