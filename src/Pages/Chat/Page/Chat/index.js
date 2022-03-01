import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native'
import { SView, SText, SPage, STheme, SNavigation, SScrollView2 } from 'servisofts-component';
import { connect } from 'react-redux';
import Header from './Header';
import Usuario from '../../../Usuario';
// import ChatAll from '../../';
import Actions from '../../Actions';
import ListaChats from './ListaChats';
import FooterChats from './FooterChats';
class Chat extends Component {
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
        var chat = chats[this.key_chat];
        return chat;
    }

    render() {
        this.key_chat = SNavigation.getParam('key');
        return (
            <SView height>
                {/* <KeyboardAvoidingView enabled style={{ flex: 1 }}> */}
                <ListaChats />
                {/* <SScrollView2 disableHorizontal>
                    
                </SScrollView2> */}
                <Header key_chat={this.key_chat} {...this.props} />
                <FooterChats />

                {/* </KeyboardAvoidingView> */}
            </SView >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Chat);