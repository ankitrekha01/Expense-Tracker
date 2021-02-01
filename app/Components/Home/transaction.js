import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Transaction = (props) => {
  return (
    <View style={styles.transaction}>
      <TouchableOpacity
        style={{
          height: 40,
          width: "50%",
          backgroundColor: "#343a40",
          justifyContent: "center",
          alignItems: "center",
          borderRightWidth:1,
          borderRightColor:'white'
        }}
        onPress={()=>{
          props.changeTransc('Income')
        }}
      >
        <Text style={{ fontSize: 20,color:'white' }}>Income</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 40,
          width: "50%",
          backgroundColor: "#343a40",
          justifyContent: "center",
          alignItems: "center",
          borderLeftWidth:1,
          borderLeftColor:'white'
        }}
        onPress={()=>{
          props.changeTransc('Expenses')
        }}
      >
        <Text style={{ fontSize: 20,color:'white' }}>Expenses</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  transaction: {
    flex: 1,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 20,
    marginTop:20
  },
});

export default Transaction;
