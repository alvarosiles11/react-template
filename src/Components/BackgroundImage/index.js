import React from 'react';
import { View } from 'react-native';
import { SGradient } from 'servisofts-component'
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
const BackgroundImage = (props) => {
    return <View style={{
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        position: "absolute",
        // padding: 0,
    }}>
        {/* <SGradient colors={["#000", "#200","#400","#100","#000"]} /> */}
       
        <SGradient colors={["#4A2A00","#1C1C1C"]} />

    </View>
}

export default BackgroundImage;