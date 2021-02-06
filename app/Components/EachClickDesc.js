import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  StatusBar,
  Platform,
} from "react-native";
import data from "../data";
import HeaderTitle from "./EachClickDesc/headerTitle";
import DetailDesc from "./EachClickDesc/detailDesc";

const EachClickDesc = ({ route, navigation }) => {
  const content = (
    <View style={styles.container}>
      <ScrollView>
        <HeaderTitle route={route} navigation={navigation} />
        <DetailDesc route={route} navigation={navigation} />
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
