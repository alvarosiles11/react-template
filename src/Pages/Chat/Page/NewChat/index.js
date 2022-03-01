import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SLoad, SNavigation, SOrdenador, SPage, SScrollView2, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import Chat from '../..';
import Find from '../../../../Components/Find';
import Usuario from '../../../Usuario';

class NewChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    iniciarChat(usr) {
        Chat.Actions.registro({
            tipo: "private",
            // tipo: "group",
            key_usuario_emisor: this.props.state.usuarioReducer.usuarioLog.key,
            key_usuario_receptor: usr.key,
        }, this.props);
        // SNavigation.goBack();
    }
    getSepa(label) {
        return <SView col={"xs-12"} height={30} backgroundColor={STheme.color.card} center>
            <SText col={"xs-11"}>{label}</SText>
        </SView>
    }
    getItem({ title, color, hiddeLine, icon, onPress }) {
        return <SView col={"xs-12"} height={55} center onPress={() => {
            if (onPress) onPress();
        }} >
            <SView col={"xs-12"} center row height>
                <SView col={"xs-0.5"}></SView>
                <SView width={62} height style={{
                    justifyContent: 'center',
                }}>
                    <SView width={42} height={42} style={{
                        borderRadius: 100,
                        overflow: 'hidden',
                        backgroundColor: STheme.color.card,
                    }}>
                        {icon}
                    </SView>
                </SView>
                <SView flex height >
                    <SView flex center>
                        <SView col={"xs-12"}>
                            <SText fontSize={18} color={color} >{title}</SText>
                        </SView>
                    </SView>
                    {!hiddeLine ? <SHr height={1} color={STheme.color.card} /> : null}
                </SView>
            </SView>
        </SView>
    }
    getUsers() {
        var usuarios = Usuario.Actions.getAll(this.props);
        // var usrLog =
        if (!usuarios) return <SLoad />

        var curLether;
        var listKey = new SOrdenador([
            { key: "Nombres", order: "asc", peso: 2 },
            { key: "Apellidos", order: "asc", peso: 1 },
        ]).ordernarObject(usuarios);
        return listKey.map((key, i) => {
            var obj = usuarios[key];
            var extra = null;
            if (obj.Nombres.toUpperCase().charAt(0) != curLether) {
                curLether = obj.Nombres.toUpperCase().charAt(0);
                extra = this.getSepa(curLether);
            }
            var hiddeLine = false;
            if (listKey.length > i + 1) {
                var obj2 = usuarios[listKey[i + 1]];
                if (obj2.Nombres.toUpperCase().charAt(0) != curLether) {
                    hiddeLine = true;
                }
            }
            return <>
                {extra}
                {this.getItem({
                    title: `${obj.Nombres} ${obj.Apellidos}`,
                    color: STheme.color.secondary,
                    hiddeLine: hiddeLine,
                    onPress: () => {
                        this.iniciarChat(obj);
                    },
                    icon: (
                        <SImage src={`${SSocket.api.root}usuario_${obj.key}`} style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "cover"
                        }} />
                    )
                })}
            </>
        })
    }
    render() {
        if (this.props.state.chatReducer.estado == 'exito' && this.props.state.chatReducer.type == "registro") {
            SNavigation.navigate("chat", {
                key: this.props.state.chatReducer.lastRegister.key,
            })
            this.props.state.chatReducer.estado = "";
            return <SView />
        }
        return (
            <SPage title={"New Chat"} >
                <SView col={"xs-12"} center height >
                    <SView col={"xs-12 sm-10 md-8 lg-7 xl-6"} center flex >
                        <SView col={"xs-11"} center style={{ backgroundColor: "blue" }}>
                            <Find />
                            <SHr />
                            <SHr />
                        </SView>
                        <SView col={"xs-12"} flex >
                            <SScrollView2 disableHorizontal>
                                {this.getItem({ title: "New Group", color: STheme.color.info, icon: <SIcon name={"Usuarios"} /> })}
                                {this.getItem({ title: "New Contact", color: STheme.color.info, hiddeLine: true, icon: <SIcon name={"Usuarios"} /> })}
                                {this.getUsers()}
                            </SScrollView2>
                        </SView>
                    </SView>
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(NewChat);