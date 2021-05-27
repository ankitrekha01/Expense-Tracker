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
import Swipeable from "react-native-gesture-handler/Swipeable";
import DetailOfDate from "../DayWiseDetails/DetailsOfDate";
import SliderWeekMonth from "../DayWiseDetails/SliderWeekMonth";
import SpentInDay from "../DayWiseDetails/SpentInDay";
import AddInfo from "../DayWiseDetails/AddInfo";

//https://coolors.co/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529

const DayWiseDetails = memo(({ route, navigation }) => {
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  );
  const [RemovedKey, setRemovedKey] = useState(0);
  const [getCurrentKeys, setCurrentKeys] = useState([]);
  //It is array which stores object in form of
  //{key:load[i],details:JSON.parse(k)}

  const swipeableRef = useRef(null);
  var load;

  //Make PArt of the code
  useEffect(() => {
    // console.log('hello')
    getKeysOfDate();
  }, [currentDate, RemovedKey]);

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

  //To use the methods of swipeable we use useRef hook
  //We used this fucntion as our swipeable never get closed as date changes
  const closeSwipeable = () => {
    swipeableRef.current.close();
  };

  //Main function of swipeableRight which does the ez magic
  function swipeRightStateChange() {
    increaseDate();
    closeSwipeable();
  }

  function swipeLeftStateChange() {
    decreaseDate();
    closeSwipeable();
  }

  //We used this function because if it remains empty swipeablewillOpen function wont work
  var renderRightActions = () => {
    return (
      <TouchableOpacity
        style={{
          height: 80,
          width: "1%",
        }}
      ></TouchableOpacity>
    );
  };
  var renderLeftActions = () => {
    return (
      <TouchableOpacity
        style={{
          height: 80,
          width: "1%",
          //this(width) gives us at what width it will close
          //It also gives at how much
          //we have to swipe so that function triggers
        }}
      ></TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <Swipeable
        style={{
          height: "100%",
          backgroundColor: "lightblue",
        }}
        ref={swipeableRef}
        friction={3}
        onSwipeableRightWillOpen={swipeRightStateChange}
        onSwipeableLeftWillOpen={swipeLeftStateChange}
        renderRightActions={renderRightActions}
        renderLeftActions={renderLeftActions}
      >
        <View
          style={{
            height: "100%",
            width: "100%",
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
          <SliderWeekMonth navigation={navigation} />
          <SpentInDay
            navigation={navigation}
            currentDate={currentDate}
            getCurrentKeys={getCurrentKeys}
          />
          <DetailOfDate
            navigation={navigation}
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            getCurrentKeys={getCurrentKeys}
            removeItem={removeItem}
          />
          <AddInfo navigation={navigation} />
        </View>
      </Swipeable>
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
    elevation: 5,
    shadowColor: "blue",
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
    color: "#dee2e6",
  },
  dateText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#e9ecef",
  },
});

export default DayWiseDetails;
