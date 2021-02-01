import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Title = (props) => {
  function change(data){
    props.changeTitle(data);
  }

  const content = (
    <View style={styles.title}>
      <Text
        style={{
          alignItems: "center",
          fontSize: 25,
          alignSelf: "flex-start",
        }}
      >
        Title
      </Text>
      <TextInput
        style={{
          height: 50,
          width: "95%",
          borderWidth: 1,
          fontSize: 18,
          paddingStart: 10, //InnerText gets padded
          marginTop: 10,
        }}
        multiline={true}
        placeholder="Add a Title"
        onChangeText={change}
        value={props.title}
      />
    </View>
  );
  return content;
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
    paddingStart: 20,
  },
});

export default Title;
