import React, { Component } from 'react';
import { SGradient, SIcon, SImage, SInput, SNavigation, SText, STheme, SView } from 'servisofts-component';

export default class FooterChats extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <SView col={"xs-12"} height={40} >
                <SGradient colors={[
                    STheme.color.primary,
                    STheme.color.primary,
                    STheme.color.primary,
                    STheme.color.secondary + "11"
                ]} />


                <SView col={'xs-12'} row height  >
                    <SView col={'xs-1'} center height >
                        <SIcon name="Add" fill="Blue" width={20} />
                    </SView>
                    <SView col={'xs-9'} center height >
                        <SInput placeholder={"Buscar...aaaaaaaaaaaaaaaa"}
                            style={{
                                width: "100%",
                                color: "#fff",
                                paddingLeft: 15,
                                backgroundColor: "#666666",
                                borderRadius: 8,
                                height: 30
                            }}
                            autoFocus={true}
                            iconR={<SView width={22} height center>
                                <SIcon name="Stick" fill="Blue" />
                            </SView>}
                        />
                    </SView>
                    <SView col={'xs-1'} center height >
                        <SView height center>
                            <SIcon name="Camara" fill="Blue" width={20} />
                        </SView>
                    </SView>
                    <SView col={'xs-1'} center height >
                        <SView height={20} colSquare center>
                            <SIcon name="Microfono" fill="Blue" />
                        </SView>
                    </SView>
                </SView>

            </SView >
        );
    }
}
