import React, { Component } from 'react';
import { SHr, SIcon, SScrollView2, SText, STheme, SView } from 'servisofts-component';


export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    getBackIcon() {
        return <SView height center>
            <SView width={14} height={14} style={{ transform: [{ rotate: '180deg' }], }} >
                <SIcon name="Back" fill={STheme.color.card} />
            </SView>
        </SView>
    }



    render() {

        const auxColor001 = 'red';
        const auxColor002 = 'grenn';
        const auxColor003 = '#484848';


        const centerRight = {
            //height: '100%',
            justifyContent: 'center',
            alignItems: "flex-start",
            //backgroundColor: auxColor001,
        };

        const centerText = {
            height: '100%',
            justifyContent: 'center',
            //ackgroundColor: auxColor002,

        };

        const centerLeft = {
            //height: '100%',
            justifyContent: 'center',
            alignItems: "flex-end",
            //backgroundColor: auxColor001
        };

        const imgUser = {
            width: 70,
            height: 70,
            borderRadius: 50, overflow: 'hidden', backgroundColor: STheme.color.card,
        };
        const imgQr = {
            width: 40,
            height: 40,
            padding: 5,
            borderRadius: 50, overflow: 'hidden', backgroundColor: STheme.color.card,
        };
        const lineaAjust = {
            alignItems: "flex-end",


        };

        const imgGo = {
            width: 10,
            height: 10,
            transform: [{ rotate: '180deg' }],
        };


        return (
            <SView col={"xs-12"} flex>
                <SScrollView2 disableHorizontal>
                    <SView height={20} />

                    <SView col={"xs-12 md-12 lg-10 xl-6"} height={100} center card >
                        <SView col={"xs-11"} row >
                            <SView col={"xs-2.7 sm-2 md-2 lg-2"}  height style={centerRight}>
                                <SView style={imgUser}>
                                    <SIcon name="Girl" fill={STheme.color.info} />
                                </SView>
                            </SView>

                            <SView col={"xs-7.5 sm-9 md-9 lg-9"} >
                                <SView height center style={centerText} >
                                    <SText fontSize={18} col={"xs-11 md-12"} >Brian Baldiviezo</SText>
                                    <SText fontSize={14} col={"xs-11 md-12"} color={STheme.color.lightBlack} >{"Nos convertimos en lo que pensamos"}</SText>
                                </SView>
                            </SView>

                            <SView col={"xs-1.8 sm-1 md-1 lg-1"} height center style={centerRight}>
                                <SView style={imgQr}>
                                    <SIcon name="Girl" fill={STheme.color.info} />
                                </SView>
                            </SView>
                        </SView>
                    </SView>



                    <SView height={35} />

                    <SView col={"xs-12 md-12 lg-10 xl-6"} height={45} center card>
                        <SView col={"xs-11"} row >
                            <SView col={"xs-1.5 md-1 lg-1"} height center style={centerRight} >
                                <SView style={{ width: 35, height: 35, borderRadius: 5, overflow: 'hidden', backgroundColor: '#FFC600', padding: 5, }}>
                                    <SIcon name="Girl" fill="#FFF9FF" />
                                </SView>
                            </SView>
                            <SView col={"xs-8.5 md-10 lg-10"}>
                                <SView height center style={centerText}>
                                    <SText fontSize={16} col={"xs-11"} >Mensaje destacados</SText>
                                </SView>
                            </SView>
                            
                            <SView col={"xs-2 md-1 lg-1"} center style={centerLeft}>
                                {this.getBackIcon()}
                            </SView>
                        </SView>
                    </SView>


                    <SView col={"xs-12 sm-12 md-12 lg-10 xl-6"} height={1.2} card>
                    <SView col={"xs-12 sm-12 md-12 lg-12 xl-12"} style={centerLeft}>
                            <SView col={"xs-9.8 sm-9.8 md-10.2 lg-10.2 xl-10.2"} height={1.2} style={{ backgroundColor: auxColor003 }} />
                        </SView>
                    </SView>



                    <SView col={"xs-12 md-12 lg-10 xl-6"} height={45} center card>
                        <SView col={"xs-11"} row >
                            <SView col={"xs-1.5 md-1 lg-1"} height center style={centerRight} >
                                <SView style={{ width: 35, height: 35, borderRadius: 5, overflow: 'hidden', backgroundColor: '#04AE9B', padding: 5, }}>
                                    <SIcon name="Girl" fill="#FFF9FF" />
                                </SView>
                            </SView>
                            <SView col={"xs-8.5 md-10 lg-10"} height center style={centerText} >
                                <SText fontSize={16} col={"xs-11"} >Dispositivos vinculados</SText>
                            </SView>
                            <SView col={"xs-2 md-1 lg-1"} center style={centerLeft}>
                                {this.getBackIcon()}
                            </SView>
                        </SView>
                    </SView>


                    <SView height={35} />


                    <SView col={"xs-12 md-12 lg-10 xl-6"} height={45} center card>
                        <SView col={"xs-11"} row >
                            <SView col={"xs-1.5 md-1 lg-1"} height center style={centerRight} >
                                <SView style={{ width: 35, height: 35, borderRadius: 5, overflow: 'hidden', backgroundColor: '#0479FD', padding: 5, }}>
                                    <SIcon name="Girl" fill="#FFF9FF" />
                                </SView>
                            </SView>
                            <SView col={"xs-8.5 md-10 lg-10"} height center style={centerText} >
                                <SText fontSize={16} col={"xs-11"} >Cuenta</SText>
                            </SView>
                            <SView col={"xs-2 md-1 lg-1"} center style={centerLeft}>
                                {this.getBackIcon()}
                            </SView>
                        </SView>
                    </SView>



                    <SView col={"xs-12 sm-12 md-12 lg-10 xl-6"} height={1.2} card>
                        <SView col={"xs-12 sm-12 md-12 lg-12 xl-12"} style={centerLeft}>
                            <SView col={"xs-9.8 sm-9.8 md-10.2 lg-10.2 xl-10.2"} height={1.2} style={{ backgroundColor: auxColor003 }} />
                        </SView>
                    </SView>


                    <SView col={"xs-12 md-12 lg-10 xl-6"} height={45} center card>
                        <SView col={"xs-11"} row >
                            <SView col={"xs-1.5 md-1 lg-1"} height center style={centerRight} >
                                <SView style={{ width: 35, height: 35, borderRadius: 5, overflow: 'hidden', backgroundColor: '#34C75B', padding: 5, }}>
                                    <SIcon name="Girl" fill="#FFF9FF" />
                                </SView>
                            </SView>

                            <SView col={"xs-8.5 md-10 lg-10"} height center style={centerText} >
                                <SText fontSize={16} col={"xs-11"} >Chats aaaaaaaaaaa</SText>
                            </SView>

                            <SView col={"xs-2 md-1 lg-1"} center style={centerLeft}>
                                {this.getBackIcon()}
                            </SView>

                        </SView>
                    </SView>


                    <SView col={"xs-12 sm-12 md-12 lg-10 xl-6"} height={1.2} card>
                        <SView col={"xs-12 sm-12 md-12 lg-12 xl-12"} style={centerLeft}>
                            <SView col={"xs-9.8 sm-9.8 md-10.2 lg-10.2 xl-10.2"} height={1.2} style={{ backgroundColor: auxColor003 }} />
                        </SView>
                    </SView>

                    <SView col={"xs-12 md-12 lg-10 xl-6"} height={45} center card>
                        <SView col={"xs-11"} row >
                            <SView col={"xs-1.5 md-1 lg-1"} height center style={centerRight} >
                                <SView style={{ width: 35, height: 35, borderRadius: 5, overflow: 'hidden', backgroundColor: '#34C75B', padding: 5, }}>
                                    <SIcon name="Girl" fill="#FFF9FF" />
                                </SView>
                            </SView>

                            <SView col={"xs-8.5 md-10 lg-10"} height center style={centerText} >
                                <SText fontSize={16} col={"xs-11"} >Chats</SText>
                            </SView>

                            <SView col={"xs-2 md-1 lg-1"} center style={centerLeft}>
                                {this.getBackIcon()}
                            </SView>

                        </SView>
                    </SView>

                    <SView col={"xs-12 sm-12 md-12 lg-10 xl-6"} height={1.2} card>
                        <SView col={"xs-12 sm-12 md-12 lg-12 xl-12"} style={centerLeft}>
                            <SView col={"xs-9.8 sm-9.8 md-10.2 lg-10.2 xl-10.2"} height={1.2} style={{ backgroundColor: auxColor003 }} />
                        </SView>
                    </SView>

                    <SView col={"xs-12 md-12 lg-10 xl-6"} height={45} center card>
                        <SView col={"xs-11"} row >
                            <SView col={"xs-1.5 md-1 lg-1"} height center style={centerRight} >
                                <SView style={{ width: 35, height: 35, borderRadius: 5, overflow: 'hidden', backgroundColor: '#34C75B', padding: 5, }}>
                                    <SIcon name="Girl" fill="#FFF9FF" />
                                </SView>
                            </SView>

                            <SView col={"xs-8.5 md-10 lg-10"} height center style={centerText} >
                                <SText fontSize={16} col={"xs-11"} >Chats</SText>
                            </SView>

                            <SView col={"xs-2 md-1 lg-1"} center style={centerLeft}>
                                {this.getBackIcon()}
                            </SView>

                        </SView>
                    </SView>


                    <SView height={35} />
                    <SView col={"xs-12 md-12 lg-10 xl-6"} height={45} center card>
                        <SView col={"xs-11"} row >

                            <SView col={"xs-1.5 md-1 lg-1"} height center style={centerRight} >
                                <SView style={{ width: 35, height: 35, borderRadius: 5, overflow: 'hidden', backgroundColor: '#007BFD', padding: 5, }}>
                                    <SIcon name="Girl" fill="#FFF9FF" />
                                </SView>
                            </SView>

                            <SView col={"xs-8.5 md-10 lg-10"} height center style={centerText} >
                                <SText fontSize={16} col={"xs-11"} >Ayuda</SText>
                            </SView>

                            <SView col={"xs-2 md-1 lg-1"} center style={centerLeft}>
                                {this.getBackIcon()}
                            </SView>

                        </SView>
                    </SView>
                </SScrollView2 >
            </SView >
        );
    }
}
