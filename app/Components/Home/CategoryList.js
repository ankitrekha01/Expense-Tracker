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
  {
    name: "Food",
    url: require("./imagesForCategory/food.png"),
  },
  {
    name: "Travel",
    url: require("./imagesForCategory/travel.png"),
  },
  {
    name: "Bills",
    url: require("./imagesForCategory/bill.png"),
  },
  {
    name: "Shopping",
    url: require("./imagesForCategory/shopping.png"),
  },
  {
    name: "Rent",
    url: require("./imagesForCategory/rent.png"),
  },
  {
    name: "Electronics",
    url: require("./imagesForCategory/electronics.png"),
  },
  {
    name: "Membership",
    url: require("./imagesForCategory/membership.png"),
  },
  {
    name: "Stationery",
    url: require("./imagesForCategory/stationery.png"),
  },
  {
    name: "Savings",
    url: require("./imagesForCategory/savings.png"),
  },
  {
    name: "Others",
    url: require("./imagesForCategory/others.png"),
  },
];

const CategoryList = (props) => {
  if (props.showList) {
    return (
      <View style={styles.container}>
        <Text style={styles.categoryText}>Category</Text>
        <View style={{ height: "80%" }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {categoryList.map((categoryName) => {
              return (
                <TouchableOpacity
                  key={categoryName.name}
                  style={styles.listContainer}
                  onPress={()=>{
                      props.changeCategory(categoryName.name)
                      props.setList(false);
                  }}
                >
                  <Image
                    style={{
                      height: "100%",
                      width: "15%",
                      marginStart: 3,
                    }}
                    source={categoryName.url}
                    resizeMode={"contain"}
                  />
                  <View
                    style={{
                      height: "100%",
                      width: "60%",
                      justifyContent: "center",
                      marginStart: 30,
                      borderBottomWidth: 2,
                      borderBottomColor: "#ffffff",
                    }}
                  >
                    <Text
                      style={{
                        color: "#06d6a0",
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      {categoryName.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
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
    backgroundColor: "#6C757D",
    alignSelf: "center",
    position: "absolute",
    top: "15%",
    elevation: 5,
    shadowColor: "black",
  },
  categoryText:{
    height:'10%',
    textAlign:'center',
    fontSize:30,
    color:'#f57600'
  },
  listContainer: {
    height: 60,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#6C757D",
    flexDirection: "row",
    marginTop:10
  },
});

export default CategoryList;
