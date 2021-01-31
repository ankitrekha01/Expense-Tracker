import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Expenses = () => {
  const content = (
    <View style={styles.expenses}>
      <Text
        style={{
          alignItems: "center",
          fontSize: 25,
          alignSelf: "flex-start",
        }}
      >
        Expenses
      </Text>
      <View style={styles.input}>
        <FontAwesome
          name="rupee"
          size={24}
          color="#495057"
          style={{ paddingTop: 13, paddingLeft: 8 }}
        />
        <TextInput
          style={{
            fontSize: 18,
            paddingLeft: 5,
            width: "95%",
          }}
          placeholder="100"
          keyboardType="number-pad"
          multiline={true}
        />
      </View>
    </View>
  );
  return content;
};

const styles = StyleSheet.create({
  expenses: {
    flex: 1,
    paddingStart: 20,
  },
  input: {
    height: 50,
    flexDirection: "row",
    width: "95%",
    borderWidth: 1,
  },
});

export default Expenses;
