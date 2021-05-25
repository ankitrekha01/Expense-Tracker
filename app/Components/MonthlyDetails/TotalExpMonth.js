import React, { useEffect, useState, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//https://coolors.co/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529

const TotalExpMonth = (props) => {
  const [sum, setSum] = useState();
  var data;
  var dataP = 0;
  // useFocusEffect(
  //   React.useCallback(() => {

  //     return ;
  //   }, [])
  // );
  useEffect(() => {
    var getValue = async () => {
      var keys = await AsyncStorage.getAllKeys();
      data = keys;
      var result = data.filter(
        (str) =>
          str.includes(props.currentMonthChosen) &&
          str.includes(props.currentYearChosen)
      );
      for (var i = 0; i < result.length; i++) {
        var value = await AsyncStorage.getItem(result[i]);
        value = JSON.parse(value);
        if (value.transc == "Income") {
          dataP += parseInt(value.exp);
        } else if (value.transc == "Expenses") {
          dataP -= parseInt(value.exp);
        }
      }
      setSum(dataP);
    };
    getValue();
  });
  var shortMon = {
    "Jan":'January',
    "Feb":'February',
    "Mar":"March",
    "Apr":"April",
    "May":'May',
    'Jun':'June',
    'Jul':"July",
    "Sep":"September",
    "Oct":"October",
    "Nov":"November",
    "Dec":"December"
  }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.netIncome}>{(() => {
        if(sum>0){
          return  sum
        } else if(sum==0){
          return sum
        }
        else{
          return Math.abs(sum)
        }
      })()}</Text> */}
      <Text style={styles.year}>{props.currentYearChosen}</Text>
      <Text style={styles.month}>{shortMon[props.currentMonthChosen]}</Text>
      <Text style={styles.netIncome}>Balance : {sum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: "30%",
    backgroundColor: "#212529",
    width: "92.5%",
    alignSelf: "center",
  },
  year: {
    fontSize: 30,
    color: "white",
    alignSelf: "center",
  },
  month: {
    fontSize: 26,
    color: "white",
    alignSelf: "center",
    marginTop:15
  },
  netIncome: {
    fontSize: 35,
    color: "white",
    alignSelf: "center",
    marginTop:30
  },
});

export default TotalExpMonth;
