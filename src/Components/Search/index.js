import React, { Component } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { SButtom, SView, SImage, SDate, SNavigation, SIcon, SText, SForm } from 'servisofts-component';
import { connect } from 'react-redux';
import SSocket from 'servisofts-socket';


class Search extends Component {
    static INSTACE = null;
    static open() {
        Search.INSTACE.fadeIn();
    }
    static close() {
        Search.INSTACE.fadeOut();
    }

    constructor(props) {
        super(props);
        this.state = {
            timeAnim: 1000,
            isOpen: false,
        };
        Search.INSTACE = this;
        this.animSize = new Animated.Value(0);
    }

    fadeIn() {
        this.setState({ isOpen: true });
        Animated.timing(this.animSize, {
            toValue: 1,
            duration: this.state.timeAnim,
            useNativeDriver: true
        }).start();
    }

    fadeOut() {

        Animated.timing(this.animSize, {
            toValue: 0,
            duration: this.state.timeAnim,
            useNativeDriver: true
        }).start(() => {
            this.setState({ isOpen: false });
        });
    }

    getForm() {
        return <SForm
            ref={(ref) => { this.form = ref; }}
            props={{
                col: "xs-12"
            }}
            inputProps={{
                customStyle: "bateon",
            }}
            inputs={{
                nombre: {
                    label: "Nombre", isRequired: true,  autoCapitalize: "none", autoFocus: true, onKeyPress: (evt) => {
                        if (evt.key === "Enter") {
                            this.form.focus("password");
                        }
                    }
                },
                nacionalidad: {
                    label: "Nacionalidad", isRequired: true, onKeyPress: (evt) => {
                        if (evt.key === "Enter") {
                            this.form.submit();
                        }
                    }
                },
                edad: {
                    label: "Edad", isRequired: true, onKeyPress: (evt) => {
                        if (evt.key === "Enter") {
                            this.form.submit();
                        }
                    }
                },
                precio: {
                    label: "Precio", isRequired: true, onKeyPress: (evt) => {
                        if (evt.key === "Enter") {
                            this.form.submit();
                        }
                    }
                },
            }}
            onSubmitName="Buscar"
            onSubmit={(data) => {
                //if (data) {
                    Usuario.Actions.login(data);
                //}
            }}
        />
    }



    getNav() {
        return <SView col={"xs-12 md-12 xl-12"} height backgroundColor={"#2f2f2f"}
            style={{
                position: "absolute",
                // left: this.animSize.interpolate({
                //     inputRange: [0, 1],
                //     outputRange: ["-70%", "0%"],
                // }),
                height:"70%",
                top: this.animSize.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["-90%", "0%"],
                }),
            }}

        >
            <SView backgroundColor={"#292929"} width="100%" height={20}></SView>


            <SView col={"xs-12"} style={{ color: "#ababab", padding: 10, }}>
                <SText>Búsqueda avanzada</SText>
                {this.getForm()}
            </SView>

        </SView>
    }
    render() {
        if (!this.state.isOpen) return null;
        return (
            <SView style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                //backgroundColor: "#66000066",
                backgroundColor: "#00000066",
            }}
                activeOpacity={1}
                onPress={() => {
                    if (this.state.isOpen) {
                        this.fadeOut();
                    } else {
                        this.fadeIn();
                    }
                }
                }>
                {this.getNav()}
            </SView>
        );
    }
}

const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Search);