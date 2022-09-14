import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const StartGameScreen = ({ onStartGame }) => {
  let randomNumber = Math.floor(Math.random() * 100);
  useEffect(() => {
    console.log(randomNumber);
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome to My Game</Text>
      <Button
        title="START GAME"
        onPress={() => {
          onStartGame(randomNumber)
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default StartGameScreen;
