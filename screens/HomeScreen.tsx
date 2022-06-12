import React from "react";
import { View, Text, StyleSheet } from "react-native";

export type Props = {};

const HomeScreen: React.FC<Props> = () => {
  const increment: number = 0;

  return (
    <View style={styles.content}>
      <Text>Counter: {increment}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
