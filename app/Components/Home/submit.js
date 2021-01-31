import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

const Submit = () => {
  const content = (
    <View style={styles.submit}>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={{ fontSize:20 , color: "white", fontWeight: "bold" }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
  return content;
};

const styles = StyleSheet.create({
  submit: {
    flex:1,
    width:"100%",
    justifyContent:'flex-end',
    marginTop:10
  },
  submitButton: {
    height:50,
    backgroundColor: "#212529",
    justifyContent: "center",
    alignItems: "center",
},
});

export default Submit;
