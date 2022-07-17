import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text } from "react-native";
import useCountDown from "../../hooks/useCountDown";
import styles from "./buttonStyles";
import * as Haptics from 'expo-haptics';

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps): JSX.Element => {
  const [count, setCount] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { time, start, stop, resetTime } = useCountDown();
  const [isHapticsEnabled, setIsHapticsEnabled] = useState(true);

  const handlePress = (): void => {
    setCount(count + 1);
    if (isHapticsEnabled) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    }
  };

  const handleResetPress = (): void => {
    setCount(0);
    setIsButtonDisabled(false);
  };

  useEffect(() => {
    if (time === 0) {
      stop();
      resetTime();
      setIsButtonDisabled(true);
    }
  }, [time]);

  return (
    <>
      <Text>Pressed {count} times</Text>
      <TouchableOpacity
        onPress={() => handlePress()}
        disabled={isButtonDisabled}
        style={isButtonDisabled ? styles.buttonDisabled : styles.button}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleResetPress()}>
        <Text>Reset</Text>
      </TouchableOpacity>

      <Text>{time}</Text>
      <TouchableOpacity onPress={() => start()}>
        <Text>Start</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsHapticsEnabled(!isHapticsEnabled)}>
        <Text>Toggle Haptics</Text>
      </TouchableOpacity>
    </>
  );
};

export { Button };
