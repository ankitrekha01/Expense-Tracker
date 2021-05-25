import React, { useEffect, useState, useRef, memo, useMemo } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DetailOfDate from "./DayWiseDetails/DetailsOfDate";
import AddInfo from "./DayWiseDetails/AddInfo";

//https://coolors.co/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529

const DayWiseDetails = memo(({ route, navigation }) => {
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  );
  const [getCurrentKeys, setCurrentKeys] = useState([]);
  const [RemovedKey, setRemovedKey] = useState(0);
  //It is array which stores object in form of
  //{key:load[i],details:JSON.parse(k)}
  var load;

  //Make PArt of the code
  useEffect(() => {
    // console.log('hello')
    getKeysOfDate();
  }, [currentDate,RemovedKey]);

  //** Gives us the keys of the current date
  async function getKeysOfDate() {
    var indices = [];
    var keys = await AsyncStorage.getAllKeys();
    load = keys;
    load = load.map((e) => new Date(e).toLocaleDateString());
    load.forEach((e, i) => {
      if (e.includes(currentDate)) {
        indices.push(i);
      }
    });
    load = [];
    indices.forEach((e) => {
      load.push(keys[e]);
    });
    var x = [];
    if (load != undefined) {
      for (var i = 0; i < load.length; i++) {
        var k = await AsyncStorage.getItem(load[i]);
        x.push({ key: load[i], details: JSON.parse(k) });
      }
      // setStateDayDetails(x);
    }
    setCurrentKeys(x);
  }

  //*****  Decrement the date  ******
  function decreaseDate() {
    var date = new Date(currentDate);
    date.setDate(date.getDate() - 1);
    setCurrentDate(date.toLocaleDateString());
  }

  //*****  Increment the date  ******
  function increaseDate() {
    var date = new Date(currentDate);
    date.setDate(date.getDate() + 1);
    setCurrentDate(date.toLocaleDateString());
  }
  function removeItem(key) {
    // console.log(key);
    AsyncStorage.removeItem(key);
    setRemovedKey(key);
  }

  return (
    <View
      style={{
        height: "100%",
      }}
    >
      {/* {console.log(getCurrentKeys)} */}
      <View style={styles.container}>
        <TouchableOpacity style={styles.leftArrow} onPress={decreaseDate}>
          <Text style={styles.textLeftArrow}>{"☚"}</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.dateText}>{currentDate}</Text>
        </View>
        <TouchableOpacity style={styles.leftArrow} onPress={increaseDate}>
          <Text style={styles.textLeftArrow}>{"➩"}</Text>
        </TouchableOpacity>
      </View>
      {/* <Text>{getCurrentKeys}</Text> */}
      <DetailOfDate
        navigation={navigation}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        getCurrentKeys={getCurrentKeys}
        removeItem = {removeItem}
      />
      <AddInfo navigation={navigation} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-between",
    marginTop: 30,
    backgroundColor: "#495057",
    alignItems: "center",
  },
  leftArrow: {
    height: "100%",
    backgroundColor: "#495057",
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  textLeftArrow: {
    fontSize: 40,
    fontWeight: "bold",
    color:'#dee2e6'
  },
  dateText: {
    fontSize: 25,
    fontWeight: "bold",
    color:'#e9ecef'
  },
});

export default DayWiseDetails;
