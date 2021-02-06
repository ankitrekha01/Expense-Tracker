import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Submit = (props) => {
  const redirect = () => {
    const storeData = async () => {
      try {
        const jsonValue = JSON.stringify({
          title: props.title,
          date: props.date.toLocaleDateString(),
          desc: props.desc,
          exp: props.exp,
          transc: props.transc,
        });
        await AsyncStorage.setItem(props.date.toLocaleDateString(), jsonValue);
        console.log("working");
      } catch (e) {
        console.log("Not working");
      }
    };
    storeData();
  };

  const content = (
    <View style={styles.submit}>
      <TouchableOpacity style={styles.submitButton} onPress={redirect}>
        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
  return content;
};

const styles = StyleSheet.create({
  submit: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  submitButton: {
    height: 50,
    backgroundColor: "#212529",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Submit;
