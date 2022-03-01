import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SIcon, STheme } from 'servisofts-component';

export default class LogoAnimado extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                minHeight: "100%",
            }}>
                {/* <SIcon name={"LogoBlack"} /> */}
                <SIcon name={STheme.getTheme()=="default"?"LogoWithe1":"LogoBlack1"} />
            </View>
        );
    }
}
