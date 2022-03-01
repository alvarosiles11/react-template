import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SInput, SLoad, SNavigation, SScrollView2, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket'
import Chat from '../../..';
import Find from '../../../../../Components/Find';
import Usuario from '../../../../Usuario';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    getBuscardor() {
        return <Find />
    }
    getChat() {
        var chats = Chat.Actions.getChats(this.props);
        var usuarios = Usuario.Actions.getAll(this.props);
        if (!chats) return <SLoad />
        if (!usuarios) return <SLoad />
        return Object.keys(chats).map((key) => {
            var obj = chats[key];
            var descripcion = obj.descripcion;
            var url_foto = ""
            if (obj.tipo == "private") {
                var usrReceptor = usuarios[obj.descripcion];
                url_foto = `${SSocket.api.root}usuario_${obj.descripcion}`;

                if (usrReceptor) {
                    descripcion = usrReceptor.Nombres + " " + usrReceptor.Apellidos;
                }
            }
            return <SView col={"xs-12"} height={70} center onPress={() => {
                SNavigation.navigate("chat", { key: obj.key });
            }} >
                <SView flex col={"xs-12"} center row>
                    <SView width={62} height style={{
                        justifyContent: 'center',
                    }}>
                        <SView width={50} height={50} style={{
                            borderRadius: 100,
                            overflow: 'hidden',
                            backgroundColor: STheme.color.card,
                        }}>
                            <SImage src={url_foto} style={{
                                width: "100%",
                                height: "100%",
                                resizeMode: "cover"
                            }} />

                        </SView>
                    </SView>
                    <SView flex height>
                        <SView height={10} />
                        <SText fontSize={16} bold>{descripcion}</SText>
                        {/* <SText fontSize={10} >{JSON.stringify(obj)}</SText> */}
                        <SView height={4} />
                        <SText fontSize={12} color={STheme.color.secondary + '99'}>{obj.lastMessage}</SText>

                    </SView>
                    <SView width={60} height center>
                        <SText fontSize={10} color={STheme.color.info}>{"14:31"}</SText>
                        <SHr height={4} />
                        <SView center width={18} height={18} backgroundColor={STheme.color.info} style={{
                            borderRadius: 100,
                        }}>
                            <SText fontSize={10} color={STheme.color.primary}>{"1"}</SText>
                        </SView>
                    </SView>
                </SView>
                <SHr height={1} color={STheme.color.card} />
            </SView>
        })
    }
    render() {
        return (
            <SView col={"xs-12"} flex>
                <SScrollView2 disableHorizontal>
                    <SView col={"xs-12"} center>
                        <SView col={"xs-11"}>
                            {this.getBuscardor()}
                            <SView height={24} />
                            <SView col={"xs-12"} center>
                                {this.getChat()}
                            </SView>
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