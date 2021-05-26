import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState, useRef } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";

//https://coolors.co/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529

const SpentInDay = (props) => {
  // useEffect(()=>{
  //     console.log('working')
  // })
  function allDetails() {
    var incomeDetails = 0;
    var expensesDetails = 0;
    if (props.getCurrentKeys.length != 0 || props.getCurrentKeys != undefined) {
      props.getCurrentKeys.forEach((e) => {
        if (e.details["transc"] == "Income") {
          incomeDetails += parseInt(e.details["exp"]);
        } else if (e.details["transc"] == "Expenses") {
          expensesDetails += parseInt(e.details["exp"]);
        }
      });
      return {
        incomeDetails: incomeDetails,
        expensesDetails: expensesDetails,
      };
    }
  }
  return (
    <View>
      {(() => {
        if (
          props.getCurrentKeys.length == 0 ||
          props.getCurrentKeys == undefined
        ) {
          return;
        } else {
          return (
            <View style={styles.container}>
              <View
                style={{
                  height: "50%",
                  width: "100%",
                  flexDirection:'row',
                  justifyContent:'space-evenly',
                  alignItems: 'center',
                }}
              >
                <Text style={styles.income}>
                  ₹{allDetails().incomeDetails}▲
                </Text>
                <Text style={styles.expense}>
                ₹{allDetails().expensesDetails}▼
                </Text>
              </View>
              <Text style={styles.net}>
                   ₹
                  {allDetails().incomeDetails - allDetails().expensesDetails}
              </Text>
            </View>
          );
        }
      })()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#343a40",
    shadowColor: "blue",
    height: 150,
    elevation: 5,
    // borderRadius: 10,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
  },
  //https://coolors.co/624e9d-00a8f0-34c38f-f1b44c-f46a6a-343a40-74788d
  income: {
    fontSize: 20,
    color: "#34c38f",
  },
  expense:{
    fontSize: 20,
    color: "#f46a6a",
  },
  net: {
    fontSize: 40,
    color: "#f1b44c",
  },
});

export default SpentInDay;

// import Svg, {
//     Circle,
//     Ellipse,
//     G,
//     Text,
//     TSpan,
//     TextPath,
//     Path,
//     Polygon,
//     Polyline,
//     Line,
//     Rect,
//     Use,
//     Image,
//     Symbol,
//     Defs,
//     LinearGradient,
//     RadialGradient,
//     Stop,
//     ClipPath,
//     Pattern,
//     Mask,
//   } from "react-native-svg";
{
  /* <Svg height="100%" width="100%" >
                <ClipPath id="clip">
                  <G scale="1.5" x="180">
                    <Polygon points="100 100, -120 100, -120 84, -88 83, -90 85, 30 89, 36 88, 47 82, 57 79, 64 84, 71 86, 77 82, 84 78, 91 76, 100 80" />
                  </G>
                </ClipPath>
                <Rect
                  width="100%"
                  height="100%"
                  fill="black"
                  clipPath="url(#clip)"
                />
              </Svg> */
}

{
  /* <ImageBackground
  source={require("./cash.png")}
  style={{
    width: "85%",
    height: "100%",
    alignSelf: "center",
    marginLeft: 40,
  }}
>
  <View>
    <Text style={styles.income}>Income</Text>
  </View>
</ImageBackground>; */
}
