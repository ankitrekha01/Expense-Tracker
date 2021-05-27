import React,{ useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Transaction = (props) => {
  return (
    <View style={styles.transaction}>
      <TouchableOpacity
        style={{
          height: 40,
          width: "50%",
          backgroundColor: props.transc=="Income"?"#28a745":"#343a40",
          justifyContent: "center",
          alignItems: "center",
          borderRightWidth:1,
          borderRightColor:'white',
          borderColor:props.submit && props.transc=='' ?"#dc3545":null,
          borderWidth:props.submit && props.transc=='' ?3:0
        }}
        onPress={()=>{
          props.changeTransc('Income')
        }}
        disabled={props.showList}
      >
        <Text style={{ fontSize: 20,color:'white' }}>Income</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 40,
          width: "50%",
          backgroundColor: props.transc=="Expenses"? "#dc3545" : "#343a40",
          justifyContent: "center",
          alignItems: "center",
          borderLeftWidth:1,
          borderLeftColor:'white',
          borderColor:props.submit && props.transc=='' ?"#dc3545":null,
          borderWidth:props.submit && props.transc=='' ?3:0
        }}
        onPress={()=>{
          props.changeTransc('Expenses')
        }}
        disabled={props.showList}
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
    marginLeft: 18,
    marginTop:20
  },
});

export default Transaction;
