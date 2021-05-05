import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
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
    let k=0;
    for (var i = 0; i < storedData.length; i++) {
      k = new Date(storedData[i]).getMonth()
      arrayData.push(k)
    }
    let uniqueArrayData = arrayData.filter((c, index) => {
      return arrayData.indexOf(c) === index;
  });
    return uniqueArrayData;
  };


  
  function data() {
    /* this was made because the state array was not working */
    let arrayData = [];
    for (var i = 0; i < storedData.length; i++) {
      arrayData.push(storedData[i]);
    }
    console.log(arrayData);
    return arrayData.reverse();
  }

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
      <ScrollView>
        <View>
          {data().map((dateKey) => {
            console.log(getMonth())
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

export default MainMenu;
