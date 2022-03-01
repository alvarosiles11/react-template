import React, { Component } from 'react';
import { SIcon, SNavigation, SText, SView } from 'servisofts-component';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SView col={"xs-11"} height={50} row>
                <SView flex style={{
                    justifyContent: "center",
                }}>
                    <SText fontSize={28} bold>Chats</SText>
                </SView>
                <SView row center >
                    <SView width={25} height={25} style={{
                        borderRadius: 100,
                        overflow: 'hidden',
                    }} onPress={() => {
                        SNavigation.navigate("newChat");
                    }}>
                        <SIcon name={"Add"} />
                    </SView>
                    <SView width={24} />
                    <SView width={25} height={25} style={{
                        borderRadius: 100,
                        overflow: 'hidden',
                    }}>
                        <SIcon name={"Edit"} />
                    </SView>
                </SView>
            </SView>
        );
    }
}
