import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SLoad, SPage, SScrollView2, SText, STheme, SView } from 'servisofts-component';
import Header from './Header';
import List from './List';
import Menu from '../../../../Components/Menu';

class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage hidden >
                <SView col={"xs-12"} center height backgroundColor={STheme.color.background}>
                    <SView col={"xs-12"} flex center>
                        <SView height={24}></SView>
                        <Header />
                        <SView col={"xs-12"} row flex>
                            <SView col={"xs-12 lg-5 xl-3"} height >
                                <List />

                            </SView>
                            <SView col={"xs-0 lg-7 xl-9"} backgroundColor={STheme.color.card}>
                            </SView>
                        </SView>

                    </SView>
                    <Menu url={"chat"} />
                </SView>

            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Lista);