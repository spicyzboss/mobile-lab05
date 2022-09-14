import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Keyboard } from "react-native";
import Colors from "../constants/colors";

const GameScreen = ({ answer, onGameOver }) => {
  const [confirmed, setComfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [enteredValue, setEnteredValue] = useState("");

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <View style={styles.resultContainer}>
        <Text>You selected</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{ selectedNumber }</Text>
        </View>
        <Text>The answer is { answer < selectedNumber ? "lower" : "greater"}. Round: { rounds }</Text>
      </View>
    );
  }

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText);
  };

  const resetInputHandler = () => {
    setEnteredValue("");
  };

  const confirmInputHandler = () => {
    if (enteredValue) {
      let v = parseInt(enteredValue);
      setSelectedNumber(v);
      setRounds(rounds+1);
      if (v === answer) onGameOver(rounds || 1);
      setComfirmed(true);
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text>Guess a Number</Text>
        <TextInput
          style={styles.input}
          value={enteredValue}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Reset"
              color={Colors.accent}
              onPress={resetInputHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              color={Colors.primary}
              onPress={confirmInputHandler}
            />
          </View>
        </View>
      </View>
      {confirmedOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    elevation: 8,
    borderRadius: 20,
  },
  input: {
    width: 100,
    textAlign: "center",
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
    height: 30,
    marginVertical: 10,
  },
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default GameScreen;
