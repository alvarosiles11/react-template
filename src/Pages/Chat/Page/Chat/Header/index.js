import React, { Component } from 'react';
import { SIcon, SImage, SNavigation, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket'
import Usuario from '../../../../Usuario';
import Actions from '../../../Actions';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getDetalle() {
        var chats = Actions.getChats(this.props);
        var usuarios = Usuario.Actions.getAll(this.props);
        if (!chats) return null;
        if (!usuarios) return null;
        var chat = chats[this.props.key_chat];
        if (!chat) return null;
        if (chat.tipo == "private") {
            return usuarios[chat.descripcion].Nombres;
        }
        return chat.descripcion;
    }
    getUrlFoto() {
        var chats = Actions.getChats(this.props);
        if (!chats) return "";
        var chat = chats[this.props.key_chat];
        if (!chat) return "";
        if (chat.tipo == "private") {
            return ` ${SSocket.api.root}usuario_${chat.descripcion}`;
        }
        return "";
    }
    render() {
        return (
            <SView col={"xs-12"} height={48} row backgroundColor={STheme.color.barColor} style={{
                position: "absolute",
            }}>
                <SView width={60} height center onPress={() => SNavigation.navigate("chats")}>
                    <SIcon name={"Arrow"} width={30} fill={STheme.color.secondary} />
                </SView>
                <SView width={60} height center>
                    <SView width={40} height={40} style={{
                        borderRadius: 100,
                        overflow: 'hidden',
                        backgroundColor: STheme.color.card,
                    }}>
                        <SImage src={this.getUrlFoto()} style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "cover"
                        }} />
                    </SView>
                </SView>
                <SView flex style={{
                    justifyContent: "center",
                }}>
                    <SText fontSize={18} bold>{this.getDetalle()}</SText>
                </SView>
                <SView width={60} height center>
                    <SView width={40} height={40} style={{
                        borderRadius: 100,
                        overflow: 'hidden',
                        backgroundColor: STheme.color.card,
                    }}>
                        <SImage src={""} style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "cover"
                        }} />
                    </SView>
                </SView>
            </SView>
        );
    }
}
