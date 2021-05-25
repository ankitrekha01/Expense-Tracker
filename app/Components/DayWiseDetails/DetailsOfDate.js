import React, { useEffect, useState, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Image,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
// import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";

//https://coolors.co/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529

const DetailOfDate = (props) => {
  return (
    <ScrollView style={styles.scrollContainer}>
      {(() => {
        if (
          props.getCurrentKeys.length == 0 ||
          props.getCurrentKeys == undefined
        ) {
          return (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={require("./document.png")} />
              <Text style={styles.imageText}>No Data Found</Text>
            </View>
          );
        } else {
          return props.getCurrentKeys.map((data) => {
            var renderRightActions = (progress) => {
              return (
                <TouchableOpacity
                  style={{
                    height: 80,
                    width: "20%",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    backgroundColor: "#eb5c68",
                  }}
                  onPress={() => {
                    props.removeItem(data.key);
                  }}
                >
                  <Animated.Text>
                    <MaterialCommunityIcons
                      name="delete"
                      size={50}
                      color="white"
                    />
                  </Animated.Text>
                </TouchableOpacity>
              );
            };
            return (
              <Swipeable key={data.key} renderRightActions={renderRightActions}>
                <TouchableOpacity
                  key={data.key}
                  onPress={() => {
                    // ****** Navigate Event ****
                    props.navigation.navigate("EachClickDesc", {
                      key: data.key,
                    });
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#343a40",
                      height: 80,
                      marginBottom: 4,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        color: "#e9ecef",
                        textAlign: "center",
                      }}
                    >
                      {data.details.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              </Swipeable>
            );
          });
        }
      })()}
      {/* <MaterialIcons name="error-outline" size={350} color="black" /> */}
      {/* <Text>{console.log(props.stateDayDetails)}</Text> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
  },
  imageContainer: {
    marginTop: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: "stretch",
    alignSelf: "center",
    justifyContent: "center",
    opacity:0.6
  },
  imageText: {
    color: "#212529",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 50,
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 5,
    textShadowColor: "grey",
    opacity:0.6
  },
});

export default DetailOfDate;
