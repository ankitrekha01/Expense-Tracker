import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Pressable,
} from "react-native";
import AddInfo from "./MainMenu/AddInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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

const MainMenu = ({ navigation }) => {
  const [storedData, setStoredData] = useState("");
  const [RemovedKey, setRemovedKey] = useState(
    0
  ); /* this was added so that in real time, when we remove a day, its removed from the menu  */

  useEffect(() => {
    AsyncStorage.getAllKeys().then((data) => {
      if (JSON.stringify(storedData) !== JSON.stringify(data)) {
        setStoredData(data);
      }
    });
  }, [storedData, RemovedKey]);

  //Removing the month duplicates and making an array of it, to use it render months
  var getMonth = () => {
    let arrayData = [];
    let k = 0;
    for (var i = 0; i < storedData.length; i++) {
      k = new Date(storedData[i]).getMonth();
      arrayData.push(k);
    }
    //To remove the duplicates in an array
    let uniqueArrayData = arrayData.filter((c, index) => {
      return arrayData.indexOf(c) === index;
    });
    return uniqueArrayData.sort();
  };

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
    uniqueArrayData = [
      2016,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025,
      2026,
      2027,
    ];
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
        height: "100%",
      }}
    >
      {/* Container for year */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          width: "80%",
          alignSelf: "center",
        }}
      >
        <ScrollView
          style={{
            width: "80%",
            height: "15%",
            backgroundColor: "lightblue",
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {getYear().map((datakey) => {
            return (
              <TouchableOpacity>
                <View
                  key={datakey}
                  style={{
                    height:'100%',
                    width: 100,
                    backgroundColor: "lightgreen",
                    paddingStart: 10,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 25 }}>{datakey}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <ScrollView>
        <View>
          {getMonth().map((dateKey) => {
            return (
              <View
                style={{
                  backgroundColor: "black",
                }}
              >
                <Pressable></Pressable>
              </View>
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
