import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackedAreaChart } from "react-native-svg-charts";
import * as shape from "d3-shape";

const HeaderTitle = (props) => {
  const data = [
    {
      month: new Date(2015, 0, 1),
      apples: 3840,
      bananas: 1920,
      cherries: 260,
      dates: 400,
    },
    {
      month: new Date(2015, 1, 1),
      apples: 1600,
      bananas: 1440,
      cherries: 960,
      dates: 400,
    },
    {
      month: new Date(2015, 2, 1),
      apples: 640,
      bananas: 960,
      cherries: 3640,
      dates: 400,
    },
    {
      month: new Date(2015, 3, 1),
      apples: 3320,
      bananas: 480,
      cherries: 740,
      dates: 400,
    },
  ];

  const colors = ["#343a40", "#6c757d", "#adb5bd", "#dee2e6"];
  //https://coolors.co/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529
  const keys = ["apples", "bananas", "cherries", "dates"];
  return (
    <View>
      <View
        style={{
          position: "absolute",
          alignItems: "center",
          flex: 1,
          backgroundColor: "#212529", //dark black
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          width: "100%",
          height: 200,
        }}
      >
        <View style={{}}>
          <Text
            style={{
              fontSize: 36,
              color: "#f8f9fa", //white https://coolors.co/170623-660099-8800cc-f5f5f5-f2c249-e5a910
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {props.eachDetail.title}
          </Text>
        </View>
        <View
          style={{
            
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 35,
              color:
                props.eachDetail.transc == "Income" ? "#63cf82" : "#fd7c82",
              //https://coolors.co/ecf0f3-fd7c82-b5030c-3f5ce8-63cf82-03fefe-221529-212529
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            ₹{props.eachDetail.exp}
          </Text>
        </View>
      </View>
      <View style={{ height: 120 }}></View>
      <StackedAreaChart
        style={{
          height: 200,
          paddingVertical: 16,
          width: "96%",
          alignSelf: "center",
        }}
        data={data}
        keys={keys}
        colors={colors}
        curve={shape.curveNatural}
        showGrid={false}
      />
    </View>
  );
};

export default HeaderTitle;
