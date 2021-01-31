import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HeaderTitle = (props) => {
  return (
    <View>
      <LinearGradient
        colors={["white", "#f0efeb"]}
        style={{
          height: 200,
          width: "100%",
        }}
        start={{ x: 1, y: 0 }}
        end={{ x: 0.1, y: 0.5 }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              alignSelf: "center",
              marginBottom: 20,
              width:"90%",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color:'black',
                fontWeight:'bold',
                textAlign:'center'
              }}
            >
              Title
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 45,
                color:'green',
                marginBottom:40,
                fontWeight:'bold',
              }}
            >
              ₹5000
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};


export default HeaderTitle;
