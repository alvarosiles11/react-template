import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SPopup, SScrollView2, SText, STheme, SView } from 'servisofts-component';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    getItem({ label, icon, lineTop, lineBottom, lineCenter }) {
        return (
            <SView col={"xs-12"} height={44} center backgroundColor={STheme.color.card} onPress={() => {
                SNavigation.navigate("estado");
            }}>
                <SHr height={1} color={lineTop ? STheme.color.secondary + "22" : null} />
                <SView col={"xs-12"} flex row>
                    <SView width={60} height center>
                        <SView style={{
                            borderRadius: 8,
                            backgroundColor: STheme.color.primary,
                            width: 32,
                            height: 32,
                            overflow: 'hidden',
                        }} center>
                            {icon}
                        </SView>
                    </SView>
                    <SView flex height   >
                        <SView col={"xs-12"} flex row>
                            <SView flex height center>
                                <SText col={"xs-12"} fontSize={16}>{label}</SText>
                            </SView>
                            <SView width={40} height center style={{ transform: [{ rotate: "180deg" }] }}>
                                <SIcon name={"Back"} width={10} fill={STheme.color.secondary + "66"} />
                            </SView>
                        </SView>
                        <SHr height={1} color={lineCenter ? STheme.color.secondary + "22" : null} />
                    </SView>
                    {/* <SView col={"xs-12"} height={1.5}  row>
                        <SView width={60} height   />
                         <SView flex height backgroundColor={lineCenter ? STheme.color.secondary + "22" : null} >
                        </SView>
                    </SView> */}
                </SView>
                <SHr height={1} color={lineBottom ? STheme.color.secondary + "22" : null} />
            </SView>
        );
    }


    getIcon({ color, name, fill, rotar }) {
        return <SView style={{
            width: 35, height: 35, borderRadius: 5, overflow: 'hidden', backgroundColor: color, padding: 5,
        }}>
            <SIcon name={name} fill={fill} />
        </SView>
    }
    getPerfil() {

        var usuario001 = this.props.state.usuarioReducer.usuarioLog

        return <SView col={"xs-12"} height={100} center backgroundColor={STheme.color.card} onPress={() => {
            SNavigation.navigate("perfil");
        }}>
            <SHr height={1} color={STheme.color.secondary + "22"} />
            <SView col={"xs-12"} row flex>
                <SView col={"xs-2.7 sm-2 md-2 lg-2"} height center>
                    <SView style={{
                        width: 70,
                        height: 70,
                        padding: 8,
                        borderRadius: 50, overflow: 'hidden', backgroundColor: STheme.color.card,
                    }}>
                        <SIcon name="Menu000User" fill={STheme.color.info} />
                    </SView>
                </SView>

                <SView col={"xs-7.5 sm-9 md-9 lg-9"} center>
                    <SView height center col={"xs-12"} >
                        <SText fontSize={18} col={"xs-12"} bold>{  usuario001["Nombres"] + " " + usuario001["Apellidos"] + " " } 🕉️ 🇨🇵</SText>


                        <SView col={"xs-12"}>
                            <SText fontSize={14} col={"xs-11 md-12"} color={STheme.color.lightBlack} >{"Nos convertimos en lo que pensamos 🕉️"}</SText>
                        </SView>
                    </SView>
                </SView>

                <SView col={"xs-1.8 sm-1 md-1 lg-1"} height center >
                    <SView style={{
                        width: 40,
                        height: 40,
                        padding: 8,
                        borderRadius: 50, overflow: 'hidden', backgroundColor: STheme.color.card,
                    }}>
                        <SIcon name="Menu000QR" fill={STheme.color.info} />

                    </SView>
                </SView>
            </SView>
            <SHr height={1} color={STheme.color.secondary + "22"} />
        </SView>
    }



    render() {
        return (
            <SView col={"xs-12"} flex>
                <SScrollView2 disableHorizontal>
                    <SView col={"xs-12"} center>
                        <SView col={"xs-12 sm-10 md-8 lg-7 xl-6"}  >
                            {this.getPerfil()}


                            <SHr height={32} />

                            {this.getItem({
                                icon: this.getIcon({ name: "Menu001Star", color: "#FFC600", fill: "#FFF9FF" }),
                                label: "Mensajes destacados",
                                lineTop: true, lineCenter: true,
                            })}

                            {this.getItem({
                                icon: this.getIcon({ name: "Menu002Lapto", color: "#04AE9B", fill: "#FFF9FF" }),
                                label: "Dispositivos vinculados",
                                lineBottom: true
                            })}
                            <SHr height={32} />
                            {this.getItem({
                                icon: this.getIcon({ name: "Menu003Key", color: "#0479FD", fill: "#FFF9FF" }),
                                label: "Cuenta",
                                lineTop: true, lineCenter: true
                            })}
                            {this.getItem({
                                icon: this.getIcon({ name: "Menu004Wasap", color: "#34C75B", fill: "#FFF9FF" }),
                                label: "Chats",
                                lineCenter: true
                            })}
                            {this.getItem({
                                icon: this.getIcon({ name: "Menu005Notify", color: "red", fill: "#FFF9FF" }),
                                label: "Notificaciones",
                                lineCenter: true
                            })}
                            {this.getItem({
                                icon: this.getIcon({ name: "Menu006Datos", color: "#34C75B", fill: "#FFF9FF" }),
                                label: "Almacenamiento y datos",
                                lineBottom: true
                            })}

                            <SHr height={32} />

                            {this.getItem({
                                icon: this.getIcon({ name: "Menu007Help", color: "#0479FD", fill: "#FFF9FF" }),
                                label: "Mensajes destacados",
                                lineTop: true, lineBottom: true,
                            })}
                        </SView>
                    </SView>
                </SScrollView2>
            </SView>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(List);