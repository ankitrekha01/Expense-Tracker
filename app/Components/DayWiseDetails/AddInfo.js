import React from "react";
import {
  View,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const AddInfo = (props) => {
  return (
    <View
      style={{
        position: 'absolute',
        justifyContent: "center",
        alignItems: "flex-end",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <LinearGradient
        colors={["#495057", "#434343"]}
        style={{
          height: 50,
          width: "20%",
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
          onPress={() => props.navigation.navigate("Home")}
        >
          <Entypo name="squared-plus" size={35} color="#e9ecef" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
 
export default AddInfo;