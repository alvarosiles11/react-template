import React from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SInput, SPage, SText, STheme, SView } from 'servisofts-component';
import Menu from '../../Components/Menu';

class Camara extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getHeader() {
        return (
            <SView col={"xs-12"} height={50} row border={'red'}>
                <SView flex style={{ justifyContent: "center", }}>
                    <SText fontSize={28} bold>Camara ee</SText>
                </SView>
            </SView>
        );
    }

    getSearch() {
        return (
            <SView col={"xs-12"} height={32}  >
                <SInput height placeholder={"Search for chats and people"}
                    icon={<SView width={32} center> <SIcon name={"Search"} width={20} fill={'white'} /> </SView>}
                    style={{ backgroundColor: STheme.color.card, borderRadius: 8, }} />
            </SView>
        );
    }

    getList() {
        return (
            <SView height={100} backgroundColor={'cyan'}>
            </SView>
        );
    }

    render() {
        return (
            <SPage title={''} hidden disableScroll >
                <SView col={"xs-12"} center height backgroundColor={'transparent'}>
                    <SView col={"xs-11"} flex backgroundColor={'transparent'}>
                        <SHr height={20} />
                        {this.getHeader()}
                        <SHr height={20} />
                        {this.getSearch()}
                        <SHr height={20} />
                        {this.getList()}
                        <SHr height={20} />
                    </SView>
                    <Menu url={"camara"} border={'blue'} />
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Camara);