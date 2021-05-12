import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const DetailDesc = (props) => {
  return (
    <View
      style={{
        backgroundColor: "#212529",
        height: 500,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: -25,
        width:'100%',
        alignSelf: 'center',
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          alignSelf: "center",
          paddingBottom:10
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: "#f8f9fa",
            fontWeight:'bold'
          }}
        >
          {props.eachDetail.date}
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          width: "92%",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            color: "#dee2e6",
            paddingStart: 20,
            paddingEnd: 20,
            fontSize: 25,
            textAlign:'center'
          }}
        >
          {props.eachDetail.desc}
        </Text>
      </View>
    </View>
  );
};

export default DetailDesc;
