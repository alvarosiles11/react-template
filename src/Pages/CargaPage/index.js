import React, { Component } from 'react';
import { SPage, SText, SThread, SView, SNavigation, STheme, SIcon, SHr } from 'servisofts-component';
import Usuario from '../Usuario';
import { connect } from 'react-redux';
import { ActivityIndicator, Animated } from 'react-native';
import LogoAnimado from './LogoAnimado';

class CargaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.anim = new Animated.Value(0);
    }

    componentDidMount() {
        // Animated.timing(this.anim, {
        //     toValue: 1,
        //     duration: 3000,
        //     useNativeDriver: true
        // }).start();
    }
    render() {

        new SThread(2500, "cargaHilo", true).start(() => {
            if (!Usuario.Actions.getUsuarioLogueado(this.props)) {
                SNavigation.replace("login");
            } else {
                SNavigation.replace("chats");
                // SNavigation.replace("");

            }
        });
        return (
            <SPage
                hidden
                title="CargaPage"
            >
                <SView center flex>
                    {/* <SView width height style={{
                        position: "absolute",
                        opacity: 0.2,
                        padding: "5%",
                    }} >
                        <SView animated style={{
                            width: "100%",
                            height: "100%",
                            transform: [{
                                scale: this.anim
                            },]
                        }}>
                            <SIcon name={STheme.getTheme() != "default" ? "LogoSSWithe" : "LogoSSBlack"} />
                        </SView>
                    </SView> */}
                    <SView width={300} colSquare >
                        <SIcon name={STheme.getTheme() != "default" ? "LogoWithe" : "LogoBlack"} />
                        {/* <LogoAnimado /> */}
                    </SView>

                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(CargaPage);