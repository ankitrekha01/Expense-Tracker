import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import objectStoringArray from "../../data";

const ShowDiv = (props) => {
  /* bind(this,data.key)  gives directly the key of the component 
            which we click basics of react native
                    click.bind(this, data.key)
          */
  return objectStoringArray.reverse().map((data) => {
    return (
      <TouchableOpacity
        key={data.key}
        onPress={() => {
          console.log(data.key);
          props.navigation.navigate("EachClickDesc", {
            key: data.key,
            title: data.title,
            date: data.date,
            exp: data.expenses,
            desc: data.description,
            used: data.used,
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

export default ShowDiv;
