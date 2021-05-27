import React, { useEffect, useState, useRef, memo, useMemo } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swipeable from "react-native-gesture-handler/Swipeable";

const WeeklyDetails = () => {
  function weekCalculate() {
    var currentWeekOfYear = moment("2020-08-31").weeks();
    var weekOfStartingMonth = moment("2020-08-31").date(1).weeks();
    var currentWeekOfMonth = currentWeekOfYear - weekOfStartingMonth + 1;
    return currentWeekOfMonth;
  }

  return (
    <View>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default WeeklyDetails;
