import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  StatusBar,
  Platform,
} from "react-native";
import HeaderTitle from "./EachClickDesc/headerTitle";
import DetailDesc from "./EachClickDesc/detailDesc";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EachClickDesc = ({ route, navigation }) => {
  const [eachDetail, setEachDetail] = useState("");
  const keyForStorage = route.params.key;
  const a = AsyncStorage.getItem(keyForStorage);
  a.then((e) => {
    setEachDetail(JSON.parse(e));
  });

  const content = (
    <View style={styles.container}>
      <ScrollView>
        <HeaderTitle
          route={route}
          navigation={navigation}
          eachDetail={eachDetail}
        />
        {/* <DetailDesc
          route={route}
          navigation={navigation}
          eachDetail={eachDetail}
        /> */}
      </ScrollView>
    </View>
  );
  return content;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
    left: 0,
    right: 0,
  },
});

export default EachClickDesc;
