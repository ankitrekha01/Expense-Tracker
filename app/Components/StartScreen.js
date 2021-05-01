import React, { useRef } from 'react';
import {View , StyleSheet, Animated, Text, Image} from 'react-native';

import image from '../Components/images.jpg';

function StartScreen() {
    const animatedView = useRef(new Animated.Value(0));

    Animated.spring(animatedView,{
        toValue:1,
        friction:2,
        tension:10,
    }).start();

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    opacity:animatedView,
                    transform:[{
                        translateY:animatedView.interpolate({
                            inputRange: [0, 1],
                            outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
                        })
                    }]
                }}
            >
                <Image source={image} />
                <Text style={styles.imageText} > Expense Tracker </Text>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#073b4c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageText:{
        color:"#118ab2",
        marginTop:30
    }

})

export default StartScreen
