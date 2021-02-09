import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const DetailDesc = (props) => {
  return (
    <View
      style={{
        backgroundColor: "black",
        height: 500,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: -20,
      }}
    >
      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: "white",
          }}
        >
          {props.eachDetail.date}
        </Text>
      </View>
      <View
        style={{
          marginTop: 40,
          width: "90%",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            paddingStart: 20,
            paddingEnd: 20,
            fontSize: 25,
          }}
        >
          {props.eachDetail.desc}
        </Text>
      </View>
    </View>
  );
};

export default DetailDesc;
