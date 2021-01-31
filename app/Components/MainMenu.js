import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import objectStoringArray from "../data";

/*
Red button colors
#0b3954
#087e8b
#bfd7ea
#ff5a5f
#c81d25

Green
#22577a
#38a3a5
#57cc99
#80ed99
#c7f9cc
*/

// const click = (data) => {
//   console.log(data);
// };



var ShowDiv = (props) => {
  /* bind(this,data.key)  gives directly the key of the component 
  which we click basics of react native
          click.bind(this, data.key)
*/
  return objectStoringArray.reverse().map((data) => {
    return (
      <TouchableOpacity
        key={data.key}
        onPress={() => {
          console.log(data.key)
          props.navigation.navigate("EachClickDesc",{
            key:data.key,
            title:data.title,
            date:data.date,
            exp:data.expenses,
            desc:data.description,
            used:data.used
          });
        }}
      >
        <View
          style={{
            backgroundColor: data.used === "credit" ? "#80ed99" : "#ff5a5f",
            height: 80,
            borderBottomWidth: 5,
            borderBottomColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                fontSize: 20,
                paddingStart: 20,
                color: data.used === "credit" ? "#22577a" : "#0b3954",
              }}
            >
              {data.title}
            </Text>
            <Text
              style={{
                fontSize: 15,
                paddingStart: 20,
                color: data.used === "credit" ? "#38a3a5" : "#bfd7ea",
                marginTop: 5,
              }}
            >
              {data.date}
            </Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                fontSize: 25,
                marginBottom: 8,
                paddingRight: 30,
                color: data.used === "credit" ? "#22577a" : "#0b3954",
                fontWeight: "bold",
              }}
            >
              ₹{data.expenses}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
};

const AddInfo = (props) => {
  return (
    <View
      style={{
        position: "absolute",
        justifyContent: "center",
        alignItems: "flex-end",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <LinearGradient
        colors={["black", "#434343"]}
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
          <Entypo name="squared-plus" size={35} color="white" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const MainMenu = ({ navigation }) => {
  const content = (
    <View
      style={{
        height: "100%",
      }}
    >
      <ScrollView>
        <ShowDiv navigation={navigation}/>
      </ScrollView>
      <AddInfo navigation={navigation} />
    </View>
  );
  return content;
};

export default MainMenu;
