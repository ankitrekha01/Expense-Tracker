import React,{useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Title = (props) => {
  const [colorBorder, changeColor] = useState(false);

  const borderColorFocus = () => {
    changeColor(true);
  };

  const borderColorBlur = () =>{
    changeColor(false)
  }

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
          color:props.submit && props.title=='' ? '#dc3545' : "black",
          fontWeight:props.submit && props.title=='' ? 'bold' : 'normal'
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
          borderColor: colorBorder ? "#2580f0" : "black",
        }}
        multiline={true}
        placeholder="Add a Title"
        onChangeText={change}
        value={props.title}
        onFocus={borderColorFocus}
        onBlur={borderColorBlur}
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
