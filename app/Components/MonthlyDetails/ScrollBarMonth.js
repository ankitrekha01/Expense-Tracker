import React, { useEffect, useState } from "react";
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

const ScrollBarMonth = (props) => {
  const [monthsOfSelectedYear, chngMonths] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getAllKeys().then((data) => {
        data= data.filter((str)=>str.includes(props.currentYearChosen))
        if (JSON.stringify(monthsOfSelectedYear) !== JSON.stringify(data)) {
          chngMonths(data);
          // async function resultant(){
          //   const monthNames = [
          //     "January",
          //     "February",
          //     "March",
          //     "April",
          //     "May",
          //     "June",
          //     "July",
          //     "August",
          //     "September",
          //     "October",
          //     "November",
          //     "December",
          //   ];
          //   var result = data.filter((str) =>
          //     str.includes(props.currentYearChosen)
          //   );
          //   for (var i = 0; i < result.length; i++) {
          //     result[i] = new Date(result[i]).getMonth();
          //   }
          //   result = result.filter((c, index) => {
          //     return result.indexOf(c) === index;
          //   });
          //   result.sort((a, b) => a - b);
          //   var final = [];
          //   result.forEach((e) => {
          //     final.push(monthNames[parseInt(e)]);
          //   });
          //   return final
          // }
          // async function stateSet(){
          //   let x = await resultant();
          //   chngMonths(x);
          //   console.log(monthsOfSelectedYear)
          // }
          // stateSet();
        }
        return ;
      });
    }, [props.RemovedKey,monthsOfSelectedYear])
  );

  const allMonths = ()=>{
      const monthNames = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"]
    var result = [];
    var final = [];
    if(monthsOfSelectedYear.length!=0){
      monthsOfSelectedYear.forEach((monthdate)=>{
        result.push(new Date(monthdate).getMonth())
        result = result.filter((c, index) => {
          return result.indexOf(c) === index;
        });
        result = result.sort((a, b) => a - b);
      })
      result.forEach((e)=>final.push(monthNames[e]))
      return final;
    }
  }

  const content =  (
    <View>
      
    </View>
  );
  return content;
};

export default ScrollBarMonth;
