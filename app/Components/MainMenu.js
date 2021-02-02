import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import ShowDiv from "./MainMenu/showDiv";
import AddInfo from "./MainMenu/AddInfo";
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
