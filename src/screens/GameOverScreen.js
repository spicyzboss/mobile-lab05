import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const GameOverScreen = ({ configureNewGameHandler, guessRounds, correctNumber }) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: { guessRounds }</Text>
      <Text>Correct Number was: { correctNumber }</Text>
      <Button title="NEW GAME" onPress={configureNewGameHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
