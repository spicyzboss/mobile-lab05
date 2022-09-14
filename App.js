import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./src/components/Header";
import GameOverScreen from "./src/screens/GameOverScreen";
import GameScreen from "./src/screens/GameScreen";
import StartGameScreen from "./src/screens/StartGameScreen";

export default function App() {
  const [correctNumber, setCorrectNumber] = useState(0);
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setCorrectNumber(0);
  };

  const startGameHandler = (rndNum) => {
    setCorrectNumber(rndNum);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (correctNumber > 0 && guessRounds <= 0) {
    content = (
      <GameScreen answer={correctNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen configureNewGameHandler={configureNewGameHandler} guessRounds={guessRounds} correctNumber={correctNumber} />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
