import React from 'react';
import { Rect, LinearGradient, Stop, Svg } from 'react-native-svg';

const BackgroundGradient = (props) => {
    return <Svg viewBox="0 0 100 120" preserveAspectRatio={"none"} width={"100%"} height={"100%"}  >
        <LinearGradient id="negro_amarillo" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox" width="100%" height="100%">
            <Stop offset="0" stop-color="#1c1c1c" />
            <Stop offset="1" stop-color="#4a2a00" />
        </LinearGradient>
        <Rect class="cls-1" x="0" y="0" width="100%" height="100%"
            fill="url(#negro_amarillo)"
        />

    </Svg>

}
export default BackgroundGradient