import React, { Component } from 'react';
import { SIcon, SText, SView } from 'servisofts-component';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SView col={"xs-12"} height={50} row>
                <SView flex style={{ justifyContent: "center", }}>
                    <SText fontSize={28} bold>Configuración</SText>
                </SView>
                 
            </SView>
        );
    }
}
