import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Submit = (props) => {
  const redirect = () => {
    //Storing data
    const storeData = async () => {
      try {
        const jsonValue = JSON.stringify({
          title: props.title,
          month:props.date.getMonth(),
          date: props.date.toLocaleDateString(),
          time:props.date.toLocaleTimeString(),
          desc: props.desc,
          exp: props.exp,
          transc: props.transc,
        });
        await AsyncStorage.setItem(props.date.toLocaleString(), jsonValue).then(()=>{
          props.navigation.navigate("DayWiseDetails");
        });
        console.log("working");
      } catch (e) {
        console.log("Not working");
      }
    };

    if (
      props.title == "" ||
      props.exp == "" ||
      props.transc == "" ||
      props.desc == ""
    ) {
      props.changeSubmit(true);
    } else {
      storeData();
      /*After submitting setting the states to null, so that when again we enter new info,
    it is empty which helps in onFocus funtion*/
      props.changeTitle("");
      props.changeExp("");
      props.changeTransc("");
      props.changeDesc("");
      props.changeSubmit(false);
      
    }
  };

  const content = (
    <View style={styles.submit}>
      <TouchableOpacity style={styles.submitButton} onPress={redirect} disabled={props.showList}>
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
