import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import SSocket from 'servisofts-socket';
import { SDate, SHr, SIcon, SImage, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import BarraSuperior from '../../../../Components/BarraSuperior';
import * as SImageImput from '../../../../Components/SImageImput';
import CerrarSession from './CerrarSession';
import Menu from '../../../../Components/Menu';

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



    getHeader() {
        return (<>
            <SView col={"xs-12 sm-12 md-12 lg-12"} height={50} row >
                <SView width={20} height />
                <SView flex style={{ justifyContent: "center", }}>
                    <SText fontSize={28} bold>Editar peril</SText>
                </SView>
            </SView>
        </>);
    }

    getPerfil({ title }) {
        return (<>
            <SView col={"xs-12 sm-12 md-12 lg-12"} height={200} center row backgroundColor={STheme.color.card}>
                <SHr height={20} />
                <SView col={"xs-11"} height={70}   >
                    <SView flex height row   >
                        <SView col={"xs-2.3 sm-2 md-2 lg-2"} center    >
                            <SView style={{
                                width: 70,
                                height: 70,
                                borderRadius: 50, overflow: 'hidden', backgroundColor: STheme.color.card,
                            }}>
                                <SIcon name="Girl" fill={STheme.color.info} />
                            </SView>
                        </SView>
                        <SView col={"xs-9.7 sm-9 md-9 lg-9"}      >
                            <SView height center col={"xs-11"} >
                                <SText fontSize={11} color={STheme.color.lightBlack} >{"Ingresa tu nombre y añade una foto del perfil (opcional)."}</SText>
                            </SView>
                        </SView>
                    </SView>
                </SView>

                <SView col={"xs-11"} height={25}     >
                    <SView col={"xs-2.3 sm-2 md-2 lg-2"} height center  >
                        <SText fontSize={12} style={{ color: 'blue' }}>Editar</SText>
                    </SView>
                </SView>

                <SView col={"xs-12"} center height={80} row>
                    <SView width={20} />
                    <SView flex center    >
                        <SHr height={1} color={STheme.color.secondary + "33"} />
                        <SHr height={10} />
                        {/* <SText col={"xs-12"} fontSize={14}  > Brian Baldivieso 🕉️ 🇨🇵</SText> */}
                        <SText col={"xs-12"} fontSize={14}  > {title} 🕉️ 🇨🇵</SText>
                        <SHr height={10} />
                        <SHr height={1} color={STheme.color.secondary + "33"} />
                    </SView>
                </SView>
            </SView>
        </>);
    }

    getItem({ title, label, lineTop, lineBottom, lineCenter }) {
        return (<>
            <SView col={"xs-12"} row height={30}>
                <SView width={20} height />

                <SView flex height>
                    <SText fontSize={12} >{title}</SText>
                </SView>
            </SView>
            <SHr height={1} color={STheme.color.secondary + "33"} />

            <SView col={"xs-12"} row height={45} backgroundColor={STheme.color.card} onPress={() => { SNavigation.navigate("estado"); }}>
                <SView width={20} height />
                <SView flex height row  >
                    <SView flex center >
                        <SText col={"xs-12"} fontSize={14}>{label}</SText>
                    </SView>
                    <SView width={40} height center style={{ transform: [{ rotate: "180deg" }] }}>
                        <SIcon name={"Back"} width={10} fill={STheme.color.secondary + "66"} />
                    </SView>
                </SView>
            </SView>
            <SHr height={1} color={STheme.color.secondary + "33"} />
        </>);
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
                <BarraSuperior duration={500} title={"configuracion"} goBack={() => { SNavigation.goBack() }} />

                <SView col={"xs-12"} center>
                    <SView col={"xs-12 sm-10 md-8 lg-7 xl-6"}  >

                        {this.getHeader()}


                        {this.getPerfil({ title: usuario001["Nombres"] + " " + usuario001["Apellidos"] + " " })}
                        <SHr height={30} />
                        {this.getItem({ title: "NÚMERO DE TELÉFONO.", label: "+591" + usuario001["Telefono"], lineTop: true, lineCenter: true })}
                        <SHr height={30} />
                        {this.getItem({ title: "INFO.", label: "Nos convertimos en lo que pensamos 🕉️", lineTop: true, lineCenter: true })}
                        {/* <CerrarSession /> */}
                        {/* <Menu url={"ajuste"} /> */}

                    </SView>
                </SView>

            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Perfil);