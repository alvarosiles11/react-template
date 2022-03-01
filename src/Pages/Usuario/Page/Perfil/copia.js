import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import SSocket from 'servisofts-socket';
import { SDate, SHr, SIcon, SImage, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import BarraSuperior from '../../../../Components/BarraSuperior';
import * as SImageImput from '../../../../Components/SImageImput';
import CerrarSession from './CerrarSession';

// import AppParams from '../../Params';
// import FilePreview from '../CarpetasPage/FilePreview';
// import * as SImageImput from '.././../Component/SImageImput';
// import moment from 'moment';
// import SImage from '../../Component/SImage';
// import CerrarSession from './CerrarSession';


class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        // this.props.dispatch({
        //     component: "image",
        //     type: "cambio",
        //     url: AppParams.urlImages + "usuario_" + this.props.state.usuarioReducer.usuarioLog.key,
        // })
    }
    getPerfil() {
        var usuario = this.props.state.usuarioReducer.usuarioLog
        return (
            <View style={{
                width: "95%",
                height: 130,
                borderBottomWidth: 1,
                borderColor: "#aaa",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
            }}>
                <View style={{
                    width: 100,
                    height: 100,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <TouchableOpacity style={{
                        width: "90%",
                        height: "90%",
                        backgroundColor: "#66000022",
                        borderRadius: 8,
                        overflow: "hidden",
                    }} onPress={() => {
                        SImageImput.choseFile({
                            servicio: "root",
                            component: "usuario",
                            type: "subirFoto",
                            estado: "cargando",
                            key: usuario.key,
                            key_usuario: usuario.key,
                        }, (resp) => {
                            this.props.dispatch({
                                component: "image",
                                type: "cambio",
                                url: SSocket.api.root + "usuario_" + this.props.state.usuarioReducer.usuarioLog.key,
                            })
                        });
                    }}>
                        {/* <SText>{`${SSocket.api.root}usuario_${this.props.state.usuarioReducer.usuarioLog.key}`}</SText> */}
                        <SImage src={`${SSocket.api.root}usuario_${this.props.state.usuarioReducer.usuarioLog.key}`} style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "cover"
                        }} />

                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 1,
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                    // backgroundColor:"#000"
                }}>
                    <View style={{
                        width: "95%",
                        flex: 1,
                        alignItems: "center",
                        flexDirection: "row"
                    }}>
                        <Text style={{
                            flex: 5,
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#fff"
                        }}>{usuario["Nombres"] + " " + usuario["Apellidos"]} </Text>
                    </View>
                    <View style={{
                        width: "95%",
                        flex: 1,
                    }}>
                        <Text style={{
                            width: "90%",
                            fontSize: 14,
                            color: "#bbb"
                        }}>{usuario["Correo"]} </Text>
                        <Text style={{
                            width: "90%",
                            fontSize: 14,
                            color: "#bbb"
                        }}>{usuario["Telefono"]} </Text>
                        <Text style={{
                            width: "90%",
                            fontSize: 10,
                            color: "#bbb"
                        }}>Fecha de registro: {new SDate(usuario.fecha_on).toString("dd/MM/yyyy")} </Text>
                    </View>
                </View>
            </View>
        )
    }

    getHeader() {
        var objusuario = this.props.state.usuarioReducer.usuarioLog

        return <SView col={"xs-12"} height={200} center row backgroundColor={STheme.color.card}>

            <SHr height={20} />
            <SView col={"xs-11"} height={70}>

                <SView col={"xs-12"} height={70} row style={{ backgroundColor: 'red' }}>
                    <SView col={"xs-4.5 sm-2 md-2 lg-2"} center>
                        <SView style={{
                            width: 70,
                            height: 70,
                            borderRadius: 50, overflow: 'hidden', backgroundColor: STheme.color.card,
                        }}>
                            <SIcon name="Girl" fill={STheme.color.info} />
                        </SView>
                    </SView>
                    <SView col={"xs-7.5 sm-9 md-9 lg-9"}   >
                        <SView height center col={"xs-12"} >
                            <SView col={"xs-11"}>
                                <SText fontSize={18} col={"xs-11 md-12"} color={STheme.color.lightBlack} >{"Ingresa tu nombre y añade una foto del perfil (opcional)."}</SText>
                            </SView>
                        </SView>
                    </SView>
                </SView>
            </SView>
            <SHr height={5} />

            <SView col={"xs-11"} height={20}  >
                <SView col={"xs-4.5 sm-2 md-2 lg-2"} height center  >
                    <SText fontSize={18} bold style={{ color: 'blue' }}>editar</SText>
                </SView>
            </SView>

            <SHr height={15} />

            <SView col={"xs-12"} height={40} row  >
                <SView col={"xs-1"} >
                </SView>
                <SView flex height center >
                    <SHr height={1} color={STheme.color.secondary + "33"} />
                    <SHr height={10} />
                    <SText fontSize={18} col={"xs-12"} bold>Brian Baldivieso 🕉️ 🇨🇵</SText>
                    <SHr height={10} />
                    <SHr height={1} color={STheme.color.secondary + "33"} />
                </SView>
            </SView>
            <SHr height={20} />

        </SView>
    }

    getItem({ label, lineTop, lineBottom, lineCenter }) {
        return (
            <SView col={"xs-12"} height={45} center backgroundColor={STheme.color.card} onPress={() => {
                SNavigation.navigate("estado");
            }}>
                <SView col={"xs-12"} flex    >
                    <SHr height={1} color={lineTop ? STheme.color.secondary + "22" : null} />

                    <SView flex height center >
                        <SView col={"xs-11"} flex center row>
                            <SView flex>
                                <SText col={"xs-12"} fontSize={16}>{label}</SText>
                            </SView>
                            <SView width={40} height center style={{
                                transform: [{ rotate: "180deg" }]
                            }}>
                                <SIcon name={"Back"} width={10} fill={STheme.color.secondary + "66"} style={{
                                    // transform: "rotate(180deg)",
                                }} />
                            </SView>
                        </SView>
                        <SHr height={1} color={lineCenter ? STheme.color.secondary + "33" : null} />
                    </SView>

                </SView>
                <SHr height={1} color={lineBottom ? STheme.color.secondary + "22" : null} />
            </SView>

        );
    }

    getIcon({ color, name, fill }) {
        return <SView style={{ width: 35, height: 35, borderRadius: 5, overflow: 'hidden', backgroundColor: color, padding: 5, }}>
            <SIcon name={name} fill={fill} />
        </SView>
    }

    render() {
        var usuario001 = this.props.state.usuarioReducer.usuarioLog

        return (
            <SPage hidden>
                <BarraSuperior duration={500} title={"Perfil de usuario"} goBack={() => {
                    SNavigation.goBack()
                }} />
                <View style={{
                    width: "100%",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#000"
                }}>
                    <View style={{
                        width: "90%",
                        borderRadius: 8,
                        height: "90%",
                        maxWidth: 500,
                        //backgroundColor: "blue",
                        alignItems: "center"
                    }}>


                        {this.getHeader()}


                        <Text style={{
                            width: "90%",
                            fontSize: 14,
                            color: "#bbb",
                            display: 'none',
                        }}>{usuario001["Nombres"] + " " + usuario001["Apellidos"]} </Text>

                        <Text style={{
                            width: "90%",
                            fontSize: 14,
                            color: "#bbb",
                            display: 'none',
                        }}>{usuario001["Telefono"]} </Text>


                        <SHr height={32} />
                        <SText fontSize={16} col={"xs-11"} >Número de teléfono</SText>
                        {this.getItem({
                            label: "+59177161521",
                            lineTop: true, lineCenter: true
                        })}

                        <SHr height={32} />
                        <SText fontSize={16} col={"xs-11"} >Info.</SText>
                        {this.getItem({
                            label: "Nos convertimos en lo que pensamos 🕉️",
                            lineTop: true, lineCenter: true
                        })}



                        {this.getPerfil()}
                        <CerrarSession />
                    </View>
                </View>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Perfil);