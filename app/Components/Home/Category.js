import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Category = (props) => {
    const [startCategoryColor, setSCC] = useState(false);


    function openCategory(){
      if(!props.showList){
        props.setList(true)
        setSCC(true)
      }
    }

  return (
    <View style={styles.mainContainer}>
      <Text
        style={{
          alignItems: "center",
          fontSize: 20,
          alignSelf: "flex-start",
        }}
      >
        Category
      </Text>
      <TouchableOpacity style={styles.container} onPress={openCategory}>
        <Text
          style={{ fontSize: 18, color: startCategoryColor ? "black" : "grey" }}
        >
          {props.category}
        </Text>
          <MaterialIcons name="category" size={24} color="#495057" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingStart: 18,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    height: 50,
  },
});

export default Category;
