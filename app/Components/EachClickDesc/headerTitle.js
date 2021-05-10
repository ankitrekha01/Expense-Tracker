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

  const colors = ["#8800cc", "#aa00ff", "#cc66ff", "#eeccff"];
  const keys = ["apples", "bananas", "cherries", "dates"];
  return (
    <View>
      <View
        style={{
          position: "absolute",
          alignItems: "center",
          flex: 1,
          backgroundColor: "#170623",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          width: "100%",
          height: 200,
          flexDirection:'row'
        }}
      >
        <View
          style={{
            marginBottom: 20,
            width: "60%",
          }}
        >
          <Text
            style={{
              fontSize: 35,
              color: "#f2c249", //white https://coolors.co/170623-660099-8800cc-f5f5f5-f2c249-e5a910
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {props.eachDetail.title}
          </Text>
        </View>
        <View style={{width:'40%'}}>
          <Text
            style={{
              fontSize: 30,
              color:
                props.eachDetail.transc == "Income" ? "#b8fe02" : "#f46056",
              //https://coolors.co/f46056-26ba95-b8fe02-b80062-8800cc
              marginBottom: 40,
              fontWeight: "bold",
              alignSelf: 'center',
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
          width: "98%",
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
