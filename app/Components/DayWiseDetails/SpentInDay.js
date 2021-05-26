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
                styles={{
                  height: "50%",
                  backgroundColor: "white",
                  width: "50%",
                }}
              >
                <Text style={styles.income}>
                  Income: ₹{allDetails().incomeDetails}
                </Text>
                <Text style={styles.income}>
                  Expenses: ₹{allDetails().expensesDetails}
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
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
    alignItems: "center",
    alignContent: "center",
  },
  income: {
    fontSize: 20,
    color: "white",
  },
  net: {
    marginTop: 20,
    fontSize: 40,
    color: "white",
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
