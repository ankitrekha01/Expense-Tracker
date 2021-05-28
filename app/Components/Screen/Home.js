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
import DatePicker from "../Home/Date";
import Title from "../Home/Title";
import Expenses from "../Home/Expenses";
import Description from "../Home/Desc";
import Submit from "../Home/submit";
import Transaction from "../Home/transaction";
import Category from "../Home/Category";
import CategoryList from "../Home/CategoryList";
// import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [title, changeTitle] = useState("");
  const [desc, changeDesc] = useState("");
  const [exp, changeExp] = useState("");
  const [transc, changeTransc] = useState("");
  const [date, setDate] = useState(new Date());
  const [submit, changeSubmit] = useState(false);
  const [category, changeCategory] = useState("Select a category");
  const [showList, setList] = useState(false);
  //                **********************************
  //           showList plays a very imp role in transaction.js date.js
  //           title.js and submit.js, so beforing changeing it make sure
  //           u take care of all this issues also
  //                 **********************************
  const content = (
    <View style={styles.home}>
      {/* <View>
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
      </View> */}
      <View
        style={{ height: "100%", width: "100%" }}
        //            ***********************************
        //       This helps to minimize the category list when we clic
        //       on anything beside the list view
        //             ***********************************
        onStartShouldSetResponder={(event) => {
          if (showList) {
            setList(false);
          }
        }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          style={{ opacity: showList ? 0.3 : 1 }}
        >
          <Title
            title={title}
            changeTitle={changeTitle}
            submit={submit}
            showList={showList}
          />
          <Category
            category={category}
            changeCategory={changeCategory}
            showList={showList}
            setList={setList}
          />
          <DatePicker date={date} setDate={setDate} showList={showList} />
          <Expenses
            exp={exp}
            changeExp={changeExp}
            submit={submit}
            showList={showList}
          />
          <Description
            desc={desc}
            changeDesc={changeDesc}
            submit={submit}
            showList={showList}
          />
          <Transaction
            transc={transc}
            changeTransc={changeTransc}
            submit={submit}
            showList={showList}
          />
          <Submit
            navigation={navigation}
            submit={submit}
            changeSubmit={changeSubmit}
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
            category={category}
            changeCategory={changeCategory}
            showList={showList}
          />
        </ScrollView>
      </View>
      <CategoryList
        showList={showList}
        setList={setList}
        category={category}
        changeCategory={changeCategory}
      />
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
