import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SLoad, SPage, SScrollView2, SText, STheme, SView } from 'servisofts-component';
import Header from './Header';
import List from './List';
import Menu from '../../Components/Menu';

class Camara extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage hidden >
                <SView col={"xs-12"} center height backgroundColor={STheme.color.background}>
                    <SView col={"xs-11"} flex >
                        <SView height={24}></SView>
                        <Header />
                        <List />
                    </SView>
                    <Menu url={"camara"} />
                </SView>

            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Camara);