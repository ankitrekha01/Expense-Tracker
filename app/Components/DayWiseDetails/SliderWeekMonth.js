import React, { useEffect, useState, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";

const SliderWeekMonth = ({navigation})=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchContainer}>
                <Text style={styles.text}>Monthly</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchContainer}>
                <Text style={styles.text}>Yearly</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchContainer}>
                <Text style={styles.text}>Custom</Text>
            </TouchableOpacity>
        </View>
    )
}

//https://coolors.co/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529

const styles = StyleSheet.create({
    container:{
        height:60,
        width:'100%',
        alignSelf: 'center',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:"#212529",
    },
    touchContainer:{
        flex:1/3,
        alignItems:'center',
        backgroundColor:"#212529",
        justifyContent: 'center',
    },
    text:{
        fontSize:18,
        color:'#E9ECEF'
    }
})

export default SliderWeekMonth;