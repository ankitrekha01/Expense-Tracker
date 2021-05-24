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

const DayWiseDetails = ({ route, navigation }) => {
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString("en-IN"))

    function decreaseDate(){
        var date = new Date(currentDate)
        date.setDate(date.getDate() - 1);
        setCurrentDate(date.toLocaleDateString("en-IN"));
    }

    function increaseDate(){
        var date = new Date(currentDate)
        date.setDate(date.getDate() + 1);
        setCurrentDate(date.toLocaleDateString("en-IN"));
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftArrow} onPress={decreaseDate}>
        <Text style={styles.textLeftArrow}>{"<"}</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.dateText}>
          {currentDate}
        </Text>
      </View>
      <TouchableOpacity style={styles.leftArrow} onPress={increaseDate}>
        <Text style={styles.textLeftArrow}>{">"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-between",
    marginTop: 40,
    backgroundColor: "lightgreen",
    alignItems: "center",
  },
  leftArrow: {
    height: "100%",
    backgroundColor: "lightblue",
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  textLeftArrow: {
    fontSize: 40,
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default DayWiseDetails;
