//Incomplete

import React, { useRef } from 'react';
import {View , StyleSheet, Animated, Text, Image, Dimensions,TouchableOpacity} from 'react-native';


import image from '../Components/images.jpg';

function StartScreen({ navigation }) {
    const animatedView = useRef(new Animated.Value(0)).current; //current Was added to remove a error

    Animated.spring(animatedView,{
        toValue:1,
        friction:2,
        tension:10,
        useNativeDriver: true //This is to remove a warning which was showing
    }).start();

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    opacity:animatedView,
                    transform:[{
                        translateY:animatedView.interpolate({
                            inputRange: [0, 1],
                            outputRange: [200, 0]  // 0 : 150, 0.5 : 75, 1 : 0
                        })
                    }]
                }}
            >
                <Image source={image} style={styles.image} />
                <TouchableOpacity 
                    onPress={()=>navigation.navigate("Home")}
                >
                    <Text style={styles.imageText}> Expense Tracker </Text>
                </TouchableOpacity>
                {/* <View>
                    <View style={styles.cone} />
                    <View style={styles.cone1} />
                </View> */}
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0b0b0b',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageText:{
        color:"#c77dff",
        marginTop:30,
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize:35,
        elevation:5,
    },
    image:{
        width:300,
        height:300,
        resizeMode: 'stretch',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    // cone: {
    //     top:50,
    //     left:57,
    //     width: 0,
    //     height: 0,
    //     borderLeftWidth: 55,
    //     borderLeftColor: "transparent",
    //     borderRightWidth: 55,
    //     borderRightColor: "transparent",
    //     borderTopWidth: 100,
    //     borderTopColor: "blue",
    //     borderRadius: 55,
    //   },
    //   cone1: {
    //     top:-25,
    //     left:100,
    //     width: 0,
    //     height: 0,
    //     borderLeftWidth: 55,
    //     borderLeftColor: "transparent",
    //     borderRightWidth: 55,
    //     borderRightColor: "transparent",
    //     borderTopWidth: 100,
    //     borderTopColor: "red",
    //     borderRadius: 55,
    //     zIndex:-1,
    //     transform: [{ rotate: "58deg" }]
    //   },

})

export default StartScreen
