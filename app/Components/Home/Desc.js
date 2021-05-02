import React,{ useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";


const Description = (props) => {
  const [colorBorder, changeColor] = useState(false);

  const borderColorFocus = () => {
    changeColor(true);
  };

  const borderColorBlur = () =>{
    changeColor(false)
  }

  function changed(data){
    props.changeDesc(data)
  }
  const content = (
    <View style={styles.desc}>
        <Text
        style={{
          alignItems: "center",
          fontSize: 25,
          alignSelf: "flex-start",
          color:props.submit && props.desc=='' ? '#dc3545' : "black",
          fontWeight:props.submit && props.desc=='' ? 'bold' : 'normal'
        }}
      >
        Description
      </Text>
      <TextInput
        style={{
          width: "95%",
          borderWidth: 1,
          fontSize: 18,
          paddingTop:5,
          paddingStart: 10, //InnerText gets padded
          marginTop: 10,
          textAlignVertical:'top', //InnerText align
          borderColor: colorBorder ? "#2580f0" : "black",
        }}
        multiline={true}
        numberOfLines={6}
        placeholder="Add a Description"
        onChangeText={changed}
        value={props.desc}
        onFocus={borderColorFocus}
        onBlur={borderColorBlur}
      />
    </View>
  );
  return content;
};

const styles = StyleSheet.create({
  desc: {
    flex: 2,
    paddingStart: 20, /*This is for to get it centered from left and right side */
  },
});

export default Description;
