import React, { useEffect, useState, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import AddInfo from "./MonthlyDetails/AddInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import ScrollBarMonth from "./MonthlyDetails/ScrollBarMonth";
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

const MonthlyDetails = ({ route, navigation }) => {
  const [monthlyData, setMonthlyData] = useState("");
  const [RemovedKey, setRemovedKey] = useState(0);
  /* this was added so that in real time, when we remove a day, its removed from the menu  */
  var currentMonthChosen = route.params.gotMonth;
  currentMonthChosen = currentMonthChosen.slice(0, 3);
  const currentYearChosen = route.params.gotYear;

  //useFocusEffect is used instead of useEffect, as useeffect was not working
  useEffect(() => {
    // let _isMounted=true;
    AsyncStorage.getAllKeys().then((data) => {
      // if (_isMounted) {
        if (JSON.stringify(monthlyData) !== JSON.stringify(data)) {
          var result = data.filter(
            (str) =>
              str.includes(currentMonthChosen) &&
              str.includes(currentYearChosen)
          );
          setMonthlyData(result);
        }
      // }
    });
    return () => {
      // ComponentWillUnmount in Class Component
      // _isMounted = false;
      setMonthlyData('')
      setRemovedKey('')
    };
  }, [RemovedKey]);

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
      {console.log(monthlyData)}
      {/* //***** Scroll Bar ******* */}
      <ScrollBarMonth
        currentYearChosen={currentYearChosen}
        currentMonthChosen={currentMonthChosen}
        RemovedKey={RemovedKey}
      />
      <ScrollView>
        <View>
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
                    backgroundColor: "red",
                    borderBottomWidth: 5,
                    borderBottomColor: "white",
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
                      backgroundColor: "#80ed99",
                      height: 80,
                      borderBottomWidth: 5,
                      borderBottomColor: "white",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        color: "#38a3a5",
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
