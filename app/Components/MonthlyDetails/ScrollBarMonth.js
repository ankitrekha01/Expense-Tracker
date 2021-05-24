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

//allMonth() return an array in which it 
//contains name like April and currentMonth gives like Apr


const ScrollBarMonth = (props) => {
  const [monthsOfSelectedYear, chngMonths] = useState([]);
  const scrollViewBarRef = useRef();
  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getAllKeys().then((data) => {
        data = data.filter((str) => str.includes(props.currentYearChosen));
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
        return;
      });
    }, [props.RemovedKey, monthsOfSelectedYear])
  );

  const allMonths = () => {
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
      "December",
    ];
    var result = [];
    var final = [];
    if (monthsOfSelectedYear.length != 0) {
      monthsOfSelectedYear.forEach((monthdate) => {
        result.push(new Date(monthdate).getMonth());
        result = result.filter((c, index) => {
          return result.indexOf(c) === index;
        });
        result = result.sort((a, b) => a - b);
      });
      result.forEach((e) => final.push(monthNames[e]));
      return final;
    }
  };

  //https://coolors.co/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529

  const content = (
    <View
      style={{
        height: "10%",
        width: "80%",
        alignSelf: "center",
      }}
    >
      {(() => {
        if (allMonths() != undefined) {
          //Isko baad me hatana padega, because slice is creating 
          //a alot problem as we break and again have to join
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
          
          var moveScrollBar = allMonths().indexOf(shortMon[props.currentMonthChosen])
          return (
            //**** Scroll Bar ****
            <ScrollView
              ref={scrollViewBarRef}
              horizontal={true}
              // pagingEnabled = {true}
              showsHorizontalScrollIndicator={false}
              onContentSizeChange={() => {
                scrollViewBarRef.current.scrollTo({
                  x: moveScrollBar * 96,
                  y: 0,
                  animated: true,
                });
              }}
            >
              {allMonths().map((monthsInYear) => {
                var slicedMonth = monthsInYear.slice(0, 3);
                return (
                  <TouchableOpacity
                    key={monthsInYear}
                    style={{
                      height: "100%",
                      width: 96,
                      backgroundColor:
                        slicedMonth == props.currentMonthChosen
                          ? "#6c757d"
                          : "#212529", //black color
                      // currentYearSelected == datakey ? "#EF476F" : "#06d6a0", //lightgreen
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onPress={()=>{
                      props.chngCurrentMonth(slicedMonth)
                    }}
                  >
                    <Text style={{ fontSize: 17, color: "#f8f9fa" }}>
                      {monthsInYear}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          );
        }
      })()}
    </View>
  );
  return content;
};

export default ScrollBarMonth;
