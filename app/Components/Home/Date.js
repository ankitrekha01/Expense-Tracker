import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Foundation } from "@expo/vector-icons";

const DatePicker = (props) => {
  const [show, setShow] = useState(false);
  const [startDateColor, setSDC] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || props.date;
    setShow(Platform.OS === "ios");
    props.setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
  };

  const showDatepicker = () => {
    showMode("date");
    setSDC(true)
  };

  return (
    <View style={styles.mainContainer}>
      <Text
        style={{
          alignItems: "center",
          fontSize: 25,
          alignSelf: "flex-start",
        }}
      >
        Date
      </Text>
      <View style={styles.container}>
        <Text style={{ fontSize: 18,color:startDateColor?'black':'grey' }}>
          {
            props.date.toLocaleDateString() /* todatstring needed to be added else was giving error  */
          }
        </Text>
        <TouchableOpacity onPress={showDatepicker}>
          <Foundation name="calendar" size={50} color="#495057" />
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={props.date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingStart: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
});

export default DatePicker;
