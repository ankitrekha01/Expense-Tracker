import React, { useEffect, useState, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import AddInfo from "./MainMenu/AddInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { get } from "react-native/Libraries/Utilities/PixelRatio";
/*
Red button colors
#0b3954
#087e8b
#bfd7ea
#ff5a5f
#c81d25

Green
#22577a
#38a3a5
#57cc99
#80ed99
#c7f9cc
*/

// const click = (data) => {
//   console.log(data);
// };

//https://coolors.co/ef476f-ffd166-06d6a0-118ab2-073b4c

const MainMenu = ({ navigation }) => {
  const scrollViewRef = useRef();
  var [detail, setDetail] = useState({});
  const [currentYearSelected, changeYearSelected] = useState(
    new Date().getFullYear()
  );
  const [storedData, setStoredData] = useState("");
  const [RemovedKey, setRemovedKey] = useState(0);
  /* this was added so that in real time, when we remove a day, its removed from the menu  */

  //useFocusEffect is used instead of useEffect, as useeffect was not working
  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getAllKeys().then((data) => {
        if (JSON.stringify(storedData) !== JSON.stringify(data)) {
          setStoredData(data);
        }
      });
    }, [storedData, RemovedKey, currentYearSelected])
  );

  //Removing the month duplicates and making an array of it, to use it render months
  var getMonth = () => {
    let arrayData = [];
    let monthName = [];
    for (var i = 0; i < storedData.length; i++) {
      //This line gives us the current year months
      if (currentYearSelected == new Date(storedData[i]).getFullYear()) {
        arrayData.push(new Date(storedData[i]).getMonth());
      }
    }
    //To remove the duplicates in an array
    let uniqueArrayData = arrayData.filter((c, index) => {
      return arrayData.indexOf(c) === index;
    });
    uniqueArrayData.sort((a, b) => a - b); // For ascending sort
    // uniqueArrayData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    uniqueArrayData.forEach((e) => {
      if (e == 0) {
        monthName.push("January");
      } else if (e == 1) {
        monthName.push("Feburary");
      } else if (e == 2) {
        monthName.push("March");
      } else if (e == 3) {
        monthName.push("April");
      } else if (e == 4) {
        monthName.push("May");
      } else if (e == 5) {
        monthName.push("June");
      } else if (e == 6) {
        monthName.push("July");
      } else if (e == 7) {
        monthName.push("August");
      } else if (e == 8) {
        monthName.push("September");
      } else if (e == 9) {
        monthName.push("October");
      } else if (e == 10) {
        monthName.push("November");
      } else if (e == 11) {
        monthName.push("December ");
      }
    });
    return monthName;
  };

  function incomeExpensesForEachMonth() {
    var getAllMonthKey = [];
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
    var obj = {};
    for (var i = 0; i < storedData.length; i++) {
      //This line gives us the current year months
      if (currentYearSelected == new Date(storedData[i]).getFullYear()) {
        getAllMonthKey.push(storedData[i]);
      }
    }
    obj[currentYearSelected] = {};
    getMonth().forEach((e) => {
      obj[currentYearSelected][e] = {
        Income: 0,
        Expenses: 0,
      };
    });
    var a = 0;
    getAllMonthKey.forEach((e) => {
      var x = monthNames[new Date(e).getMonth()];

      AsyncStorage.getItem(e).then((data) => {
        a++;
        var y = JSON.parse(data).transc;
        var z = JSON.parse(data).exp;
        obj[currentYearSelected][x][y] =
          parseInt(obj[currentYearSelected][x][y]) + parseInt(z);
        if (a === getAllMonthKey.length) {
          if (JSON.stringify(detail) !== JSON.stringify(obj)) {
            setDetail(obj);
          }
        }
      });
    });
  }

  //To get the years
  var getYear = () => {
    let arrayData = [];
    let k = 0;
    for (var i = 0; i < storedData.length; i++) {
      k = new Date(storedData[i]).getFullYear();
      arrayData.push(k);
    }
    //To remove the duplicates in an array
    let uniqueArrayData = arrayData.filter((c, index) => {
      return arrayData.indexOf(c) === index;
    });
    // uniqueArrayData = [
    //   2010,
    //   2011,
    //   2012,
    //   2013,
    //   2014,
    //   2015,
    //   2016,
    //   2017,
    //   2018,
    //   2019,
    //   2020,
    // ];
    return uniqueArrayData.sort();
  };

  function removeItem(key) {
    console.log(key);
    AsyncStorage.removeItem(key);
    setRemovedKey(key);
  }

  const content = (
    <View
      style={{
        flex: 1,
        height: "100%",
      }}
    >
      {/* Container for year */}
      <View
        style={{
          width: "80%",
          alignSelf: "center",
          height: "10%",
        }}
      >
        <ScrollView
          stickyHeaderIndices={[10]}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // contentOffset={{ x: 1000 }} not working thus used below code
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >
          {getYear().map((datakey) => {
            return (
              <TouchableOpacity
                key={datakey}
                style={{
                  height: "100%",
                  width: 100,
                  backgroundColor:
                    currentYearSelected == datakey ? "#EF476F" : "#06d6a0", //lightgreen
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  if (currentYearSelected != datakey) {
                    changeYearSelected(datakey);
                  }
                }}
              >
                <Text style={{ fontSize: 25, color: "#073b4c" }}>
                  {datakey}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: "95%",
            alignSelf: "center",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {incomeExpensesForEachMonth()}
          {getMonth().map((dateKey) => {
            return (
              <Pressable
                key={dateKey}
                style={{
                  height: 200,
                  width: "50%",
                  backgroundColor: "#073b4c",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 2,
                  borderColor: "white",
                }}
                android_ripple={{ color: "black" }}
              >
                <Text style={{ color: "#ffd166", fontSize: 24 }}>
                  {dateKey}
                </Text>
                <Text style={{ color: "#06d6a0", fontSize: 15 }}>
                  Total Income :{" "}
                  {Object.keys(detail).length != 0 &&
                  detail[currentYearSelected] != undefined
                    ? detail[currentYearSelected][dateKey]["Income"]
                    : ""}
                </Text>
                <Text style={{ color: "#EF476F", fontSize: 15 }}>
                  Total Expense :{" "}
                  {Object.keys(detail).length != 0 &&
                  detail[currentYearSelected] != undefined
                    ? detail[currentYearSelected][dateKey]["Expenses"]
                    : ""}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
      <AddInfo navigation={navigation} />
    </View>
  );
  return content;
};

export default MainMenu;
