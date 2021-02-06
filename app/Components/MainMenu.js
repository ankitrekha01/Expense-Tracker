import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import AddInfo from "./MainMenu/AddInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

const MainMenu = ({ navigation }) => {
  const [storedData, setStoredData] = useState("");
  useEffect(() => {
    AsyncStorage.getAllKeys().then((data) => {
      if (JSON.stringify(storedData) !== JSON.stringify(data)) {
        setStoredData(data);
      }
    });
  }, [storedData]);

  function data() {
    let arrayData = [];
    for (var i = 0; i < storedData.length; i++) {
      arrayData.push(storedData[i]);
    }
    return arrayData.reverse();
  }

  const content = (
    <View
      style={{
        height: "100%",
      }}
    >
      <ScrollView>
        <View>
          {data().map((dateKey) => {
            return (
              <TouchableOpacity
                key={dateKey}
                onPress={() => {
                  navigation.navigate("EachClickDesc", {
                    key: dateKey,
                  });
                }}
              >
                <View
                  style={{
                    backgroundColor: "#80ed99",
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
                        fontSize: 15,
                        paddingStart: 20,
                        color: "#38a3a5",
                        marginTop: 5,
                      }}
                    >
                      {dateKey}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <AddInfo navigation={navigation} />
    </View>
  );
  return content;
};

export default MainMenu;
