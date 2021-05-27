import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Expenses = (props) => {
  const [colorBorder, changeColor] = useState(false);

  function changed(data) {
    props.changeExp(data);
  }

  const borderColorFocus = () => {
    changeColor(true);
  };

  const borderColorBlur = () =>{
    changeColor(false)
  }

  const content = (
    <View style={styles.expenses}>
      <Text
        style={{
          alignItems: "center",
          fontSize: 20,
          alignSelf: "flex-start",
          color:props.submit && props.exp=='' ? '#dc3545' : "black",
          fontWeight:props.submit && props.exp=='' ? 'bold' : 'normal'
        }}
      >
        Expenses
      </Text>
      <View
        style={{
          height: 50,
          flexDirection: "row",
          width: "95%",
          borderWidth: 1,
          borderColor: colorBorder ? "#2580f0" : "black",
          marginTop: 10,
        }}
      >
        <FontAwesome
          name="rupee"
          size={24}
          color= {colorBorder ? "#2580f0" : "#495057"}
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
          value={props.exp}
          onChangeText={changed}
          onFocus={borderColorFocus}
          onBlur={borderColorBlur}
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
  input: {},
});

export default Expenses;
