import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import DatePicker from "./Home/Date";
import Title from "./Home/Title";
import Expenses from "./Home/Expenses";
import Description from "./Home/Desc";
import Submit from "./Home/submit";
import Transaction from "./Home/transaction";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [title, changeTitle] = useState("");
  const [desc, changeDesc] = useState("");
  const [exp, changeExp] = useState("");
  const [transc, changeTransc] = useState("");
  const [date, setDate] = useState(new Date());

  const content = (
    <View style={styles.home}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("MainMenu")}
          style={{
            height: 40,
            flexDirection: "row",
            backgroundColor: "#495057",
            width: 70,
            alignSelf: "center",
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <Ionicons name="md-arrow-back" size={20} color="white" />
          </View>
          <Text
            style={{
              height: "100%",
              color: "white",
              fontSize: 20,
              textAlignVertical: "center",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Title title={title} changeTitle={changeTitle} />
        <DatePicker date={date} setDate={setDate} />
        <Expenses exp={exp} changeExp={changeExp} />
        <Description desc={desc} changeDesc={changeDesc} />
        <Transaction transc={transc} changeTransc={changeTransc} />
        <Submit
          navigation={navigation}
          title={title}
          date={date}
          exp={exp}
          desc={desc}
          transc={transc}
          changeTitle={changeTitle}
          setDate={setDate}
          changeExp={changeExp}
          changeTransc={changeTransc}
          changeDesc={changeDesc}
        />
      </ScrollView>
    </View>
  );
  return content;
};
const styles = StyleSheet.create({
  home: {
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Home;
