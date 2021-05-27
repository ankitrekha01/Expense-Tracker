import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";

var categoryList = [
  "Food",
  "Travel",
  "Bills",
  "Shopping",
  "Rent",
  "Grocery",
  "Membership",
  "Savings",
  "Others",
];

const CategoryList = (props) => {
  if (props.showList) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.dummyContainer}></View>
        {categoryList.map((categoryName) => {
            var lowerCase = categoryName.toLowerCase().toString();
            var imageDirectory = "./imagesForCategory/"+lowerCase+".png";
          return (
            <TouchableOpacity key={categoryName} style={styles.listContainer}>
              <Image
                style={{
                  height: "100%",
                  width: "15%",
                  marginStart: 3,
                }}
                source={require(imageDirectory)}
                resizeMode={"contain"}
              />
              <View
                style={{
                  height: "100%",
                  width: "60%",
                  justifyContent: "center",
                  marginStart: 20,
                }}
              >
                <Text style={{ color: "#2ec4b6", fontSize: 20 }}>{categoryName}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
        <View style={styles.dummyContainer}></View>
      </ScrollView>
    );
  } else {
    return null;
  }
};

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
//https://coolors.co/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529
//https://coolors.co/011627-fdfffc-2ec4b6-e71d36-ff9f1c
const styles = StyleSheet.create({
  container: {
    height: "70%",
    width: "80%",
    backgroundColor: "#011627",
    alignSelf: "center",
    position: "absolute",
    top: "15%",
    elevation: 5,
    shadowColor: "black",
  },
  dummyContainer: {
    height: 50,
    width: "100%",
  },
  listContainer: {
    height: 60,
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#fdfffc",
    borderBottomWidth: 2,
    borderBottomColor: "#ff9f1c",
    shadowColor: "#e71d36",
    elevation: 10,
    flexDirection: "row",
  },
});

export default CategoryList;
