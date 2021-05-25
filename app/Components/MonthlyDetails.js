import React, { useEffect, useState, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import ScrollBarMonth from "./MonthlyDetails/ScrollBarMonth";
import AddInfo from "./MonthlyDetails/AddInfo";
import TotalExpMonth from "./MonthlyDetails/TotalExpMonth";
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

//https://coolors.co/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529

const MonthlyDetails = ({ route, navigation }) => {
  const [monthlyData, setMonthlyData] = useState("");
  const [RemovedKey, setRemovedKey] = useState(0);
  /* this was added so that in real time, when we remove a day, its removed from the menu  */
  var currentMonthChosenParams = route.params.gotMonth;
  currentMonthChosenParams = currentMonthChosenParams.slice(0, 3);
  const [currentMonthChosen, chngCurrentMonth] = useState(
    currentMonthChosenParams
  );
  const currentYearChosen = route.params.gotYear;

  //useFocusEffect is used instead of useEffect, as useeffect was not working

  // ********Cleanup not done yet *********
  useEffect(() => {
    // let _isMounted=true;
    AsyncStorage.getAllKeys().then((data) => {
      // if (_isMounted) {
      if (JSON.stringify(monthlyData) !== JSON.stringify(data)) {
        var result = data.filter(
          (str) =>
            str.includes(currentMonthChosen) && str.includes(currentYearChosen)
        );
        setMonthlyData(result);
      }
      // }
    });
    return () => {
      // ComponentWillUnmount in Class Component
      // _isMounted = false;
      setMonthlyData("");
      setRemovedKey("");
    };
  }, [RemovedKey, currentMonthChosen]);

  function data() {
    /* this was made because the state array was not working */
    let arrayData = [];
    for (var i = 0; i < monthlyData.length; i++) {
      arrayData.push(monthlyData[i]);
    }
    // console.log(arrayData);
    return arrayData.reverse();
  }

  function removeItem(key) {
    // console.log(key);
    AsyncStorage.removeItem(key);
    setRemovedKey(key);
  }

  const content = (
    <View
      style={{
        height: "100%",
        paddingTop: 30,
      }}
    >
      {/* {console.log(monthlyData)} */}
      {/* //***** Scroll Bar ******* */}
      <ScrollBarMonth
        currentYearChosen={currentYearChosen}
        currentMonthChosen={currentMonthChosen}
        chngCurrentMonth={chngCurrentMonth}
        RemovedKey={RemovedKey}
      />
      <TotalExpMonth
        monthlyData={monthlyData}
        setMonthlyData={setMonthlyData}
        currentMonthChosen={currentMonthChosen}
        chngCurrentMonth={chngCurrentMonth}
        currentYearChosen={currentYearChosen}
      />
      <ScrollView>
        <View style={{ marginTop: 15 }}>
          {data().map((dateKey) => {
            // console.log(getMonth());
            var renderRightActions = (progress) => {
              return (
                <TouchableOpacity
                  style={{
                    height: 80,
                    width: "20%",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    backgroundColor: "#eb5c68",
                  }}
                  onPress={() => {
                    removeItem(dateKey);
                  }}
                >
                  <Animated.Text>
                    <MaterialCommunityIcons
                      name="delete"
                      size={50}
                      color="white"
                    />
                  </Animated.Text>
                </TouchableOpacity>
              );
            };
            return (
              <Swipeable key={dateKey} renderRightActions={renderRightActions}>
                <TouchableOpacity
                  key={dateKey}
                  onPress={() => {
                    // ****** Navigate Event ****
                    navigation.navigate("EachClickDesc", {
                      key: dateKey,
                    });
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#343a40",
                      height: 80,
                      marginBottom: 4,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        color: "#e9ecef",
                        textAlign: "center",
                      }}
                    >
                      {dateKey}
                    </Text>
                  </View>
                </TouchableOpacity>
              </Swipeable>
            );
          })}
        </View>
      </ScrollView>
      <AddInfo navigation={navigation} />
    </View>
  );
  return content;
};

export default MonthlyDetails;
